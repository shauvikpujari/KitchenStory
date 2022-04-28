import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-addcakes',
  templateUrl: './addcakes.component.html',
  styleUrls: ['./addcakes.component.css']
})
export class AddcakesComponent implements OnInit {
  addcakeForm=new FormGroup({
    image:new FormControl('',[Validators.required,Validators.email]),
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    ingredient:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    weight:new FormControl('',[Validators.required]),
    eggless:new FormControl('',[Validators.required])
  })
  constructor(private apserv:AppServiceService,private route:Router) {
   
   }
   
  ngOnInit(): void {
  }
  file:any;
  imageUrl:any;
  getFile(event:any){
    this.file = event.target.files[0]
  }
  upload(){
    
    var url = "https://apifromashu.herokuapp.com/api/upload"
    var formdata = new FormData()
   formdata.append("file",this.file)
   var myheaders =  new HttpHeaders()
   myheaders = myheaders.append("authtoken",localStorage["token"])
   var options = {
     headers:myheaders
   }
   this.apserv.uploadImage(url,formdata,options).subscribe({
     next:(response:any)=>{
       console.log("Response from image upload api", response)
       this.imageUrl = response.imageUrl
     },
     error:(error:any)=>{
       console.log("Error from image upload api" , error)
     }
   })
   var url="https://apifromashu.herokuapp.com/api/addcake"
   var val=this.addcakeForm.value;
   var eggless=false;
   if(val.eggless=="Yes") eggless=true;
   var body={name:val.name,price:val.price,description:val.description,ingredients:[val.ingredient],type:val.type,weight:val.weight,eggless:eggless,image:this.imageUrl};
   console.log(body)
   this.apserv.getCartItem(url,body,options).subscribe({
     next:(r:any)=>{
         this.route.navigate(['/home'])
         this.apserv.getToast().success("Cake added Successfully!!");
     },
     error:(r:any)=>
     {
       this.apserv.getToast().error("Adding Cake failed");
     }    

   })
 }
  
}

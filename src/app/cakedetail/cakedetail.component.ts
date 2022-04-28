import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
   cakeid:any;
   cake:any;
  iscardadded:Boolean=true;
  constructor(private route : ActivatedRoute,private apser:AppServiceService,private route2:Router) 
  {
    this.cakeid=this.route.snapshot.params["cakeid"]

    var url="https://apifromashu.herokuapp.com/api/cake/"+this.cakeid
 
    this.apser.getCakeDetails(url).subscribe({
       
      next:(response:any)=>{
        console.log("Response from cake api",response);
        this.cake=response.data;
      },
      error:(error:any)=>{
        console.log("Error in fetching Details",error)
      }
      
 
    })
   
   }
   
   purchase():any
   {
     if(localStorage['token'])
     {
      this.iscardadded=false;
      let myheaders=new HttpHeaders();
      myheaders=myheaders.append("authtoken", localStorage['token'])
      var url="https://apifromashu.herokuapp.com/api/addcaketocart";
      var cake1:any={};
      cake1.cakeid=this.cakeid;
      cake1.name=this.cake.name;
      cake1.price=this.cake.price;
      cake1.image=this.cake.image;
      cake1.weight=this.cake.weight;
      var options={
        headers:myheaders
      }
      this.apser.getCartItem(url,cake1,options).subscribe({
       
        next:(response:any)=>{
               console.log("From addcaketocart api",response)
               this.route2.navigate(['/payment']);
        },
        error:(response:any)=>{
              console.log("Error From addcaketocart api",response)
        }
        
      })
    }
     else
     {
         this.route2.navigate(['/login']);
         this.apser.getToast().error("Please Log in");
     }
   }
  
   
  ngOnInit(): void {
  }

}

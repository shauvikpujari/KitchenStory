import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cakelist:any=[];
  total:any=0;
  constructor(private apserv:AppServiceService,private rout: Router) 
  {
    var url="https://apifromashu.herokuapp.com/api/cakecart";
    let myheaders=new HttpHeaders();
    myheaders=myheaders.append("authtoken",localStorage["token"]);
    var options={
      headers:myheaders
    }
    var body={};
    this.apserv.getCartItem(url,body,options).subscribe({
     
      next:(re:any)=>{
         console.log("From cakecart api",re);
         this.cakelist=re.data;
         this.apserv.setcart(this.cakelist.length);
         this.cakelist.forEach((x:any) => {
          this.total= this.total+(x.quantity*x.price);
         });
      },
      error:(re:any)=>{
        this.apserv.getToast().error("Error in cart api");
      }

    })
    


  }

   decreasequant(index:any):any{
    var url="https://apifromashu.herokuapp.com/api/removeonecakefromcart";
    var cakeid=this.cakelist[index].cakeid;

    let myheaders=new HttpHeaders();
    myheaders=myheaders.append("authtoken",localStorage["token"]);
    var options={
      headers:myheaders
    }
    this.apserv.getCartItem(url,{cakeid},options).subscribe({
        next:(r:any)=>{
             this.total-=this.cakelist[index].price;
             console.log(this.cakelist[index].quantity)
             this.cakelist[index].quantity-=1;
             if(this.cakelist[index].quantity==0)
             {
              this.cakelist.splice(index,1);
              this.apserv.decrement_cartval();
             }
                 
             console.log("Api removeonecakefromcart",r);
        },
        error:(r:any)=>{
          console.log("Error from Api removeonecakefromcart",r);
        }

    })

   }
  increasequant(index:any):any
  {
    var url="https://apifromashu.herokuapp.com/api/addcaketocart";
    var cakeid=this.cakelist[index].cakeid;
    var body={cakeid:cakeid,name:this.cakelist[index].name,price:this.cakelist[index].price,image:this.cakelist[index].image,weight:this.cakelist[index].weight}
    let myheaders=new HttpHeaders();
    myheaders=myheaders.append("authtoken",localStorage["token"]);
    var options={
      headers:myheaders
    }
    this.apserv.getCartItem(url,body,options).subscribe({
        next:(r:any)=>{
             this.total+=this.cakelist[index].price;
             this.cakelist[index].quantity+=1;
             console.log("Api addonecakefromcart",r);
        },
        error:(r:any)=>{
          console.log("Error from Api addonecakefromcart",r);
        }

    })
  
  }
  removefromcart(index:any):any
  {
    var url="https://apifromashu.herokuapp.com/api/removecakefromcart";
    var cakeid=this.cakelist[index].cakeid;
    
    let myheaders=new HttpHeaders();
    myheaders=myheaders.append("authtoken",localStorage["token"]);
    var options={
      headers:myheaders
    }
    this.apserv.getCartItem(url,{cakeid},options).subscribe({
        next:(r:any)=>{
             this.total-=this.cakelist[index].price*this.cakelist[index].quantity;
             this.cakelist.splice(index,1);
             this.apserv.decrement_cartval();
             console.log("Api removecakefromcart",r);
        },
        error:(r:any)=>{
          console.log("Error from Api removecakefromcart",r);
        }

    })
  }
   checkout():any{
     this.apserv.addcart_details(this.cakelist,this.total);
     this.rout.navigate(['/checkout']);
   }
  ngOnInit(): void {
  }

}

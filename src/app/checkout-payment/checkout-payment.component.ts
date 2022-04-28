import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent implements OnInit {

  constructor(private apserv:AppServiceService,private route:Router) 
  {
    
  }
  obj:any;
  isplaced:Boolean=false
  orderid:any;
  checkout():any
  {
    let myheaders=new HttpHeaders();
    
    myheaders=myheaders.append("authtoken", localStorage['token'])
    var options={
      headers:myheaders
    }
    var url="https://apifromashu.herokuapp.com/api/addcakeorder"
    this.obj=this.apserv.get_details();
    console.log(this.obj)
    this.apserv.getCartItem(url,this.obj,options).subscribe({
      next:(r:any)=>{
        this.isplaced=true;
        this.orderid=r.order.orderid;
               console.log("Api from addcaketoorder",r)
               
      },
      error:(r:any)=>{
             console.log("Error from addcaketocart",r);
      }
    })
    
  }
  ngOnInit(): void {
  }

}

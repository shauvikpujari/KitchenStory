import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService 
{
  uploadImage(url: string, formdata: FormData, options:any) 
  {
    return this.http.post(url,formdata,options);
  }
  ascending(cakelist:any):any
  {
     return cakelist.sort(function(obj1:any,obj2:any){ return obj1.price-obj2.price});
  }
  descending(cakelist:any):any
  {
    return cakelist.sort(function(obj1:any,obj2:any){ return -(obj1.price-obj2.price)});
  }
  getRequest(url:any):any
  {
     return  this.http.get(url);
  }
  postRequest(url:any,obj:any)
  {
    return this.http.post(url,obj);
  }
  getToast():any
  {
    return this.toastr;
  }
  getCakeDetails(url:any):any
  {
    return this.http.get(url);
  }
  getCartItem(url:any,body:any,options:any):any
  {
    return this.http.post(url,body,options);
  }
  cart_item=[];
  total_price=0;
  nameuser:any;
  address:any;
  city:any;
  pincode:any;
  phone:any;
  addaddress_details(address:any,city:any,pincode:any,phone:any,name:any):any{
    this.address=address;
    this.city=city;
    this.pincode=pincode;
    this.phone=phone;
    this.nameuser=name;
  }
  addcart_details(cart_item:any,total_price:any):any{
    this.cart_item=cart_item;
    this.total_price=total_price;
  }
  cartval=0;
  setcart(val:any):any
  {
    this.cartval=val;
  }
  increment_cartval():any
  {
     this.cartval++;
  }
  decrement_cartval():any
  {
    this.cartval--;
  }
  get_details():any
  {
    return {cakes:this.cart_item,price:this.total_price,name:this.nameuser,address:this.address,city:this.city,pincode:this.pincode,phone:this.phone};
  }
  constructor(private http:HttpClient,private toastr: ToastrService) { }
}

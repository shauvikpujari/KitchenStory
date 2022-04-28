import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor(private appser:AppServiceService,private toastr: ToastrService,private _loader:NgxUiLoaderService,private http:HttpClient) 
  {
    var url="https://apifromashu.herokuapp.com/api/allcakes";
   appser.getRequest(url).subscribe(
    {
      next:(r:any)=>{
            this.cakelist=r.data;
      },
      error:(error:any)=>
      {
        console.log("Error is",error)
      }
      
    })
    


   }
  
  cakelist: any=[
    {name:"Velvet",price:2,popular:1,path:"assets//pic4.jpg",special:true},
    {name:"Fruit",price:3,popular:1,path:"assets//pic5.jpg",special:false},
    {name:"Velvet",price:2,popular:5,path:"assets//pic6.jpg",special:false},
    {name:"Fruit",price:3,popular:4,path:"assets//pic7.jpg",special:true},
    {name:"Velvet",price:2,popular:3,path:"assets//pic8.jpg",special:true},
    {name:"Fruit",price:3,popular:10,path:"assets//pic9.jpg",special:false},
    {name:"Velvet",price:2,popular:5,path:"assets//pic10.jpg",special:false},
    {name:"Fruit",price:3,popular:9,path:"assets//pic11.jpg",special:true}];
  
  hightolow():any
  {
    this.toastr.success('High to low price is enabled!','Done!');
    this.cakelist=this.appser.descending(this.cakelist);
  }
  lowtohigh():any
  {
    this.toastr.success('Low to high price is enabled!','Done!');
    this.cakelist=this.appser.ascending(this.cakelist);
  }
  popularity():any
  {
    // this.toastr.success('High to low Popularity is enabled!','Done!');
    // this.cakelist=this.appser.popularityCake(this.cakelist);
  }
  ngOnInit(): void {
  }

}

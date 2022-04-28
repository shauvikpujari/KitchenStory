import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projecttitle:any="Kitchen Story";
  isLoggedin:any;
  name:any;
  cakename:any;
  cakelist:any=[];
  count:any=0;
  constructor(private aservice:AppServiceService,private route:Router) 
  {
        
        this.isLoggedin=localStorage["token"]?true:false;
        if(this.isLoggedin)
        {
          var url="https://apifromashu.herokuapp.com/api/cakecart";
          let myheaders=new HttpHeaders();
          myheaders=myheaders.append("authtoken",localStorage["token"]);
          var options={
            headers:myheaders
          }
          var body={};
          this.aservice.getCartItem(url,body,options).subscribe({
           
            next:(re:any)=>{
               console.log("From cakecart api",re);
               this.cakelist=re.data;
      
            },
            error:(re:any)=>{
                console.log("Error From cakecart api",re);
            }
      
          })
          this.count=this.cakelist.length;
        }
        
  }
  isAdmin:Boolean=false;
  admin_user=["shauvikpujari03@gmail.com"];
  ngDoCheck():any
  {
    
    this.count=this.aservice.cartval;
    if(this.admin_user.includes(localStorage['username']))
    {
      this.isAdmin=true;
    }
    if(localStorage["token"])
    {
      this.name=localStorage['name'].split(' ')[0];
      this.isLoggedin=true;
    }
    else
    {
      this.isLoggedin=false;
    }
  }
  search():any
  { 
    if(this.cakename)
      this.route.navigate(["/search"],{queryParams:{q:this.cakename}})
  }
  logout():any
  {
    localStorage.clear();
    this.route.navigate(['/home'])
  }
  
  ngOnInit(): void {
  }

}

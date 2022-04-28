import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appser:AppServiceService,private rout:Router) 
  {
  }
  user:any={};
  data:any=[];
  submit():any
  {
    var url="https://apifromashu.herokuapp.com/api/login";
    this.appser.postRequest(url,this.user).subscribe(
      {
        next:(response:any)=>{
          var a={... response};
          this.data.push(a);
          this.appser.getToast().success("Success!!",response['name']);
          
          if(response['token'])
          {
          this.rout.navigate(['/home']);
          localStorage.setItem('token',response['token'])
          localStorage.setItem('name',response['name'])
          localStorage.setItem('username',response['email'])
          }
          console.log(response);
          
        }
        ,
        error:(error:any)=>{
          console.log("Error is"+error);
        }
      }
    )
        
  }

  ngOnInit(): void {
  }

}

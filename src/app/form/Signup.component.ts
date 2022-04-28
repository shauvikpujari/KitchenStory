import { Component, OnInit,NgModule} from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class SignupComponent implements OnInit {
  signupForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private appSer:AppServiceService) { }
  user:any={};
  data:any=[];
  user_exist=false;
  submit():any
  {
    this.user=this.signupForm.value
    
    var url="https://apifromashu.herokuapp.com/api/register";
    this.appSer.postRequest(url,this.user).subscribe({
    
      next:(r:any)=>
    {
      this.appSer.getToast().success("Account created");
        
        if(r.message==='User Already Exists')
        {
             this.user_exist=true;
        }
  },
  error:(error:any)=>
  {
    this.appSer.getToast().error("Unable to create Acc");
  }
    });
    var a={... this.user};
    this.data.push(a);
    
  }
  
  ngOnInit(): void {
  }

}

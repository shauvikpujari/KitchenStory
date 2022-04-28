import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  email:any;
  constructor(private apser:AppServiceService) { }

  submit():any{
    console.log(this.email)
    var url="https://apifromashu.herokuapp.com/api/recoverpassword";
    let myheaders=new HttpHeaders();
    myheaders=myheaders.append("authtoken",localStorage["token"]);
    var options={
      headers:myheaders
    }
    var body={email:this.email};
    this.apser.postRequest(url,body).subscribe({
        next:(r:any)=>{
             
             console.log("Api Recover Password",r);
        },
        error:(r:any)=>{
          console.log("Error from Api Recover Password",r);
        }

    })
  
  }
 
  ngOnInit(): void {
  }

}

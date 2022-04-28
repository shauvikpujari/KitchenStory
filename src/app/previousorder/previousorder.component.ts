import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-previousorder',
  templateUrl: './previousorder.component.html',
  styleUrls: ['./previousorder.component.css']
})
export class PreviousorderComponent implements OnInit {
  cakelist:any=[];
  constructor(private apserv:AppServiceService) 
  {
    var url="https://apifromashu.herokuapp.com/api/cakeorders";
    let myheaders=new HttpHeaders();
    myheaders=myheaders.append("authtoken",localStorage["token"]);
    var options={
      headers:myheaders
    }
    this.apserv.getCartItem(url,{},options).subscribe({
       next:(r:any)=>{
         for(let x of r.cakeorders)
         {
           for( let y of x.cakes)
           {
             this.cakelist.push(y);
           }
         }
          console.log(this.cakelist)
         console.log("Api previous cake order",r)
       },
       error:(r:any)=>{
        console.log("Error from Api previous cake order",r)
      }

    })

  }

  ngOnInit(): void {
  }

}

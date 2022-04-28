import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cake:any={};
  constructor(private route:ActivatedRoute,private appser:AppServiceService) {
    this.route.queryParams.subscribe((query:any)=>{

      var searchtext=query["q"];
      console.log(searchtext)
      var url="https://apifromashu.herokuapp.com/api/searchcakes?q="+searchtext;
      
      this.appser.getRequest(url).subscribe({
       next:(response:any)=>
       {
         console.log("Response from Api",response);
         this.cake=response.data;
         
       },
       error:(respons:any)=>
       {
         console.log("Error:",respons)
       }
       
  
      })




    }) 
   
  }
  
  
  ngOnInit(): void {
  }

}

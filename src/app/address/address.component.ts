import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userdetails:any={};
  constructor(private appser:AppServiceService,private route:Router) { }
  addAddress():any
  {
    this.appser.getToast().success("Address Added!");
    this.appser.addaddress_details(this.userdetails.Address,this.userdetails.city,this.userdetails.pincode,this.userdetails.phone,this.userdetails.name);
    this.route.navigate(['/checkout/payment'])
  }
  ngOnInit(): void 
  {
    
  }

}

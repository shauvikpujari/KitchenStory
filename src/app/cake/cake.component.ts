import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})

export class CakeComponent implements OnInit {
  @Input() cakedata:any={};
  showcakedetails(): any 
  {
    this.route.navigate(['/detail',this.cakedata.cakeid])
  }
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}

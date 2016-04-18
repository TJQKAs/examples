import {Component}from 'angular2/core';
import{Router}from 'angular2/router';

@Component({

  //  selector: "",
   template: `
     <h3>This is Component 2</h3>
     <button (click)="onNavigate()">Turn me back to Component1</button>
   `

})

export class Component2Component{
// we should use routing object that's why we should inject Router
constructor(private  _router:  Router){}

// method which we call by clicking button
 onNavigate(){
   //here call method navigate from Router via _router and set argument - where we are going to go
   this._router.navigate(['Component1']);
 }
}

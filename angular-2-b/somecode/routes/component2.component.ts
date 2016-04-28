import {Component}from 'angular2/core';
import{Router, CanDeactivate, ComponentInstruction}from 'angular2/router';

@Component({

  //  selector: "",
   template: `
     <h3>This is Component 2</h3>
     <button (click)="onNavigate()">Turn me back to Component1</button>
   `

})
// CanDeactive - lifecycle interface
export class Component2Component implements CanDeactivate{
// we should use routing object that's why we should inject Router
constructor(private  _router:  Router){}

// method which we call by clicking button
 onNavigate(){
   //here call method navigate from Router via _router and set argument - where we are going to go
   this._router.navigate(['Component1', {source: 'Component2'}]);
 }
 // method of lifecycle interface with 2 arg(next - what we gonna do and previous instruction)
 routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any{
   return confirm("Yes or Not");
 }
}

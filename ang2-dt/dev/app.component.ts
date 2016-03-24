import {Component} from 'angular2/core';
import {InputComponent}from "./bindings/input.component";
import {ConfirmComponent}from "./bindings/confirm.component";

   @Component ({
//
  selector: 'my-app',
 template: `<div class="container">
                 <my-input (submitted)="onSubmit($event)" [mySelf]="confirmedMySelf"></my-input>
                  </div>
                  <div class="container">
                 <my-confirm (confirmed)="onConfirm($event)" [mySelf]="mySelf"></my-confirm>
                  </div>  `,
                  directives: [InputComponent, ConfirmComponent]

})

//<my-input (submitted)="onSubmit($event)"></my-input> - catch  submission , run function onSubmit with $event
// $event - means that I can't change any values which passed by $event through my onSubmit function
// [mySelf]="confirmedMySelf"  - we bound  'mySelf' prop -  from InputComponent with "confirmedMySelf -from AppComponent
// [mySelf]="mySelf"  - we bound two 'mySelf' prop - 1 from ConfirmComponent 2-from AppComponent

// this our default class
export class AppComponent {
  // initialize two js objects
    mySelf = {myName:' ', myAge: ' '};
    confirmedMySelf = {myName: ' ', myAge:' '};

    onSubmit(mySelf:{myName:string, myAge: string}){
      //set mySelf object in parent component
      this.mySelf = {myName: mySelf.myName, myAge: mySelf.myAge};
    }
    onConfirm(mySelf: {myName: string, myAge: string }){
      this.confirmedMySelf = {myName: mySelf.myName, myAge: mySelf.myAge};
    }
}

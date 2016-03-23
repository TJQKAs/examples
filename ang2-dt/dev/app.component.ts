import {Component} from 'angular2/core';
import {InputComponent}from "./bindings/input.component";

   @Component ({


//
  selector: 'my-app',
 template: `<div class="container">
                 <my-input (submitted)="onSubmit($event)"></my-input>
                  </div>
                  <div class="container">
                ...
                  </div>  `,
                  directives: [InputComponent]

})

//<my-input (submitted)="onSubmit($event)"></my-input> - catch  submission , run function onSubmit with $event
// $event - means that I can't change any values which passed by $event through my onSubmit function

// this our default class
export class AppComponent {
  // initialize two js objects
    mySelf = {myName:' ', myAge: ' '};
    confirmedMySelf = {myName: ' ', myAge:' '};
}

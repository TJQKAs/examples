// EventEmitter - allows us emit events
import {Component, EventEmitter} from 'angular2/core';
import{Input} from 'angular2/core';

@Component ({
  selector: 'my-prop-binding',
  template: `
               <h2>This is a child Component</h2>
               <h2>Hello, {{name}} and I am {{age}}</h2>
               <h2>{{hisName}}</h2>
               <h4>I have hobbies:</h4>
              <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies >
  `,
  // we use - 'inputs' to check that this is exactly 'myName' from the parent class so which we'll convey to parent Component by exporting with
  // PropBindingComponent class
  inputs: ['name:myName'],
  outputs:['hobbiesChange']
})


export class PropBindingComponent {
   myName = '';
   hisName = "His name Georg";
   // export decorator
  @Input ('myAge')  age = "34";

  hobbiesChange = new EventEmitter<string>();

  onHobbiesChanged(hobbies: string){
   this.hobbiesChange.emit(hobbies);
  }
}

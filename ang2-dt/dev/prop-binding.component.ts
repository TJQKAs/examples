import {Component} from 'angular2/core';

@Component ({
  selector: 'my-prop-binding',
  template: `
               <h2>This is a child Component</h2>
               <h2>Hello, {{myName}} and I am {{myAge}}</h2>
               <h2>{{hisName}}</h2>
  `,
  // we use - 'inputs' to check that this is exactly 'myName' from the parent class so which we'll convey to parent Component by exporting with
  // PropBindingComponent class
  inputs: ['myName', 'myAge']
})


export class PropBindingComponent {
   myName = '';
   hisName = "His name Georg";
   myAge = "34"
}

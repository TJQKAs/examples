import {Component} from 'angular2/core';
import {PropBindingComponent} from './prop-binding.component';

   @Component ({

// in input field we type name and use two-way databinding to convey to child component "prop-binding-component"
// by ngModel .. also name should appear in our arrow braces prop-binding-component - data which the child class
// will export from prop-binding-component.ts ...
  selector: 'my-app',
 template: `
 <h1 class="{{'parent'}}">Parent component</h1>
 <h2>Please type your name below</h2>
 <input type="text" [(ngModel)]="name">
 <br/><br/>
 <p>{{name}}</p>
 <section class="child">
 <my-prop-binding [myName] = "name"  [myAge] = "40" (hobbiesChange)="hobbies=$event"></my-prop-binding>
 <p>My hobbies are: {{hobbies}}</p>
 </section>`,
 directives: [PropBindingComponent]

})
// this our default class
export class AppComponent {
   name = "";
   hobbies = "";

}

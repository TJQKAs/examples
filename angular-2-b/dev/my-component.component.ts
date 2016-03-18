// this allow us to use component  decorator
import{Component} from 'angular2/core';
// allow us fire something when component ready to act or download
import {OnInit} from 'angular2/core';
//we wouldn't have found directive TestComponent if we hadn't imported it before by expression below
import{TestComponent} from "./test.component";

@Component({
  // here we make all configuration of our component
  selector: 'my-component',
  // we put in span condition which use css class is-awesome  in case we answer 'yes'
  // in template we can observe various directives - style directives with condition of name color
  // directive for button disability  which depends on condition inputElement
  // we can put everything <elem [directive]="something expression something">something</elem>
  template: `
  <h1>this is my component!</h1>
  Hi my name is <span [style.color]="inputElement.value==='yes' ? 'cyan' : 'green'">{{name}}</span> I'm  {{age}}, this my first app ,<span [class.is-awesome]= "inputElement.value=== 'yes' "  [class.is-aweful]= "inputElement.value=== 'no' "    > I think it's very nice</span>
     <br/><br/>
     Am I rigth?
     <input type="text" #inputElement (keyup)="0">
     <br/>
     <br/>
     <button [disabled]="inputElement.value  === 'yes'">only if I type yes</button>
     <test></test> `,
     styleUrls: ['src/css/mycomponent.css'],
     directives: [TestComponent]
})
// i'm going to export this class and use it outside
export class MyComponentComponent implements OnInit  {
    name:  string;
    age: number;
    // I should implement the method which interface requires to imp
    ngOnInit() :any{
      this.name = "John";
      this.age = 45;
    }
}

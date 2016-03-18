// this allow us to use component  decorator
import{Component} from 'angular2/core';
@Component({
  // here we make all configuration of our component
  selector: 'my-component',
  // we put in span condition which use css class is-awesome  in case we answer 'yes'
  // in template we can observe various directives - style directives with condition of name color
  // directive for button disability  which depends on condition inputElement 
  template: `
  <h1>this is my component!</h1>
  Hi my name is <span [style.color]="inputElement.value==='yes' ? 'cyan' : 'green'">{{name}}</span>, this my first app ,<span [class.is-awesome]= "inputElement.value=== 'yes' "  [class.is-aweful]= "inputElement.value=== 'no' "    > I think it's very nice</span>
     <br/><br/>
     Am I rigth?
     <input type="text" #inputElement (keyup)="0">
     <br/>
     <br/>
     <button [disabled]="inputElement.value  === 'yes'">only if I type yes</button>`,
     styleUrls: ['src/css/mycomponent.css']
})
// i'm going to export this class and use it outside
export class MyComponentComponent {
    name  = 'Bill';
}

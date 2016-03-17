// this allow us to use component  decorator
import{Component} from 'angular2/core';
@Component({
  // here we make all configuration of our component
  selector: 'my-component',
  template: `<h1>this is my component!</h1>
  <p>Hey it's my next string add it just rigth now</p>`,
})
// i'm going to export this class and use it outside
export class MyComponentComponent {

}

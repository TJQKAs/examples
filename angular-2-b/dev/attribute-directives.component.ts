import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-attribute-directives',
  template: `
  <div [myHighlight]="'red'">
    Highlight me
  </div>
   <br/><br/>
  <div [myHighlight]="'rgb(139, 12, 184)'">
    Do it again
  </div>
  `,
  directives: [HighlightDirective]
})

export class AttributeDirectives{

}

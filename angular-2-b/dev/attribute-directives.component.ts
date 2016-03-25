import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-attribute-directives',
  template:`
  <div myHighLight>
    Highlight me
  </div> <br/><br/>
  <div myHighLight>
    Do it again
  </div> <br/><br/>

  `,
  directives: [HighlightDirective]
})

export class AttributeDirectives{

}

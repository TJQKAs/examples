import {Directive} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {OnInit}from 'angular2/core';
import {Renderer}from 'angular2/core';

//[myHighLight]' - but it's not a property binding in that way  it's way of definition name in Directives  it's just a selector name
@Directive ({
    selector: '[myHighLight]'

})

export class HighlightDirective implements OnInit{
  private _defaultColor : 'green';
  constructor(private _elRef: ElementRef, private _renderer: Renderer){}

     ngOnInit():any{
     this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor);

  }

}

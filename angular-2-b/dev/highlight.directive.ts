import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

//[myHighLight]' - but it's not a property binding in that way  it's way of definition name in Directives  it's just a selector name
@Directive ({
    selector: '[myHighlight]',
    inputs: ['highlightColor']
})


export class HighlightDirective implements OnInit{
  // Please note that becuase everywhere we can see expression " private  _defaultColor:'red'; "  - isn't correct
  // so correct is " private  _defaultColor = 'red';"
private  _defaultColor = 'green';
highlightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}
    ngOnInit():any{
      // this._renderer.setElementStyle(this._elRef, "background-color", this._defaultColor);
      // this. _elRef.nativeElement.style.backgroundColor = this._defaultColor;
      this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
    }
}

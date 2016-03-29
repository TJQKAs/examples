import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

//[myHighLight]' - but it's not a property binding in that way  it's way of definition name in Directives  it's just a selector name
@Directive ({
    selector: '[myHighlight]',
    inputs: ['highlightColor:myHighlight'],
    //metadata configurator - in host we can specify event which should fire some action
    host: {
      '(mouseenter)': 'onMouseEnter()',
      '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighlightDirective {
// export class HighlightDirective implements OnInit{
  // Please note that becuase everywhere we can see expression " private  _defaultColor:'red'; "  - isn't correct
  // so correct is " private  _defaultColor = 'red';"
private  _defaultColor = 'green';
highlightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}
//     ngOnInit():any{
//       this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
//     }
// listen event (mouseenter) and fire function highlight
 onMouseEnter(){
    this.highlight(this.highlightColor || this._defaultColor);
 }

// listen event (mouseleave) and erase attribute data
 onMouseLeave(){
      this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", null);
 }

 // class which change eleme color attr to default color or to set color
    private highlight(color:string){
      this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
    }
}

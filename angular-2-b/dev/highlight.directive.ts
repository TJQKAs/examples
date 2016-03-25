import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {OnInit}from "angular2/core";
// import {Renderer}from 'angular2/core';

//[myHighLight]' - but it's not a property binding in that way  it's way of definition name in Directives  it's just a selector name
@Directive ({
    selector: '[myHighLight]'
})

export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}


// why it doesn't work i don't know ???? 

// export class HighlightDirective implements OnInit {
//   private _defaultColor : 'green';
//   constructor (private  _elRef:  ElementRef){}
//
//      ngOnInit():any{
//      this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
//
//   }
//
// }

//
// export class HighlightDirective implements OnInit {
//   private defaultColor : '#11d0f2';
//   constructor (private  elRef:  ElementRef,  private renderer: Renderer){}
//
//      ngOnInit():any{
//      this.renderer.setElementStyle(this.elRef, 'background-color', this.defaultColor);
//
//   }
//
// }

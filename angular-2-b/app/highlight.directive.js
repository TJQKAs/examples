System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            // import {Renderer}from 'angular2/core';
            //[myHighLight]' - but it's not a property binding in that way  it's way of definition name in Directives  it's just a selector name
            HighlightDirective = (function () {
                function HighlightDirective(el) {
                    el.nativeElement.style.backgroundColor = 'yellow';
                }
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighLight]'
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EseUNBQXlDO1lBRXpDLG9JQUFvSTtZQUtwSTtnQkFDSSw0QkFBWSxFQUFjO29CQUN2QixFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO2dCQUNyRCxDQUFDO2dCQVBMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLGVBQWU7cUJBQzVCLENBQUM7O3NDQUFBO2dCQU1GLHlCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCxtREFJQyxDQUFBOzs7O0FBR0QseUNBQXlDO0FBRXpDLHNEQUFzRDtBQUN0RCxxQ0FBcUM7QUFDckMsaURBQWlEO0FBQ2pELEVBQUU7QUFDRix1QkFBdUI7QUFDdkIsNkVBQTZFO0FBQzdFLEVBQUU7QUFDRixNQUFNO0FBQ04sRUFBRTtBQUNGLElBQUk7QUFFSixFQUFFO0FBQ0Ysc0RBQXNEO0FBQ3RELHNDQUFzQztBQUN0Qyw2RUFBNkU7QUFDN0UsRUFBRTtBQUNGLHVCQUF1QjtBQUN2Qix5RkFBeUY7QUFDekYsRUFBRTtBQUNGLE1BQU07QUFDTixFQUFFO0FBQ0YsSUFBSSIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtPbkluaXR9ZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbi8vIGltcG9ydCB7UmVuZGVyZXJ9ZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbi8vW215SGlnaExpZ2h0XScgLSBidXQgaXQncyBub3QgYSBwcm9wZXJ0eSBiaW5kaW5nIGluIHRoYXQgd2F5ICBpdCdzIHdheSBvZiBkZWZpbml0aW9uIG5hbWUgaW4gRGlyZWN0aXZlcyAgaXQncyBqdXN0IGEgc2VsZWN0b3IgbmFtZVxuQERpcmVjdGl2ZSAoe1xuICAgIHNlbGVjdG9yOiAnW215SGlnaExpZ2h0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICB9XG59XG5cblxuLy8gd2h5IGl0IGRvZXNuJ3Qgd29yayBpIGRvbid0IGtub3cgPz8/PyBcblxuLy8gZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4vLyAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA6ICdncmVlbic7XG4vLyAgIGNvbnN0cnVjdG9yIChwcml2YXRlICBfZWxSZWY6ICBFbGVtZW50UmVmKXt9XG4vL1xuLy8gICAgICBuZ09uSW5pdCgpOmFueXtcbi8vICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9kZWZhdWx0Q29sb3I7XG4vL1xuLy8gICB9XG4vL1xuLy8gfVxuXG4vL1xuLy8gZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4vLyAgIHByaXZhdGUgZGVmYXVsdENvbG9yIDogJyMxMWQwZjInO1xuLy8gICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgZWxSZWY6ICBFbGVtZW50UmVmLCAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpe31cbi8vXG4vLyAgICAgIG5nT25Jbml0KCk6YW55e1xuLy8gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsUmVmLCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuZGVmYXVsdENvbG9yKTtcbi8vXG4vLyAgIH1cbi8vXG4vLyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

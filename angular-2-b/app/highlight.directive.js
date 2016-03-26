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
    var core_1;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //[myHighLight]' - but it's not a property binding in that way  it's way of definition name in Directives  it's just a selector name
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    // export class HighlightDirective implements OnInit{
                    // Please note that becuase everywhere we can see expression " private  _defaultColor:'red'; "  - isn't correct
                    // so correct is " private  _defaultColor = 'red';"
                    this._defaultColor = 'green';
                }
                //     ngOnInit():any{
                //       this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
                //     }
                // listen event (mouseenter) and fire function highlight
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                // listen event (mouseleave) and erase attribute data
                HighlightDirective.prototype.onMouseLeave = function () {
                    this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", null);
                };
                // class which change eleme color attr to default color or to set color
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor:myHighlight'],
                        //metadata configurator - in host we can specify event which should fire some action
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxvSUFBb0k7WUFXcEk7Z0JBT0ksNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFOdkUscURBQXFEO29CQUNuRCwrR0FBK0c7b0JBQy9HLG1EQUFtRDtvQkFDNUMsa0JBQWEsR0FBRyxPQUFPLENBQUM7Z0JBR3lDLENBQUM7Z0JBQzNFLHNCQUFzQjtnQkFDdEIsa0lBQWtJO2dCQUNsSSxRQUFRO2dCQUNSLHdEQUF3RDtnQkFDdkQseUNBQVksR0FBWjtvQkFDRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVGLHFEQUFxRDtnQkFDcEQseUNBQVksR0FBWjtvQkFDSyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekYsQ0FBQztnQkFFRCx1RUFBdUU7Z0JBQzVELHNDQUFTLEdBQWpCLFVBQWtCLEtBQVk7b0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzSCxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzt3QkFDdEMsb0ZBQW9GO3dCQUNwRixJQUFJLEVBQUU7NEJBQ0osY0FBYyxFQUFFLGdCQUFnQjs0QkFDaEMsY0FBYyxFQUFFLGdCQUFnQjt5QkFDakM7cUJBQ0osQ0FBQzs7c0NBQUE7Z0JBMkJGLHlCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCxtREF5QkMsQ0FBQSIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vL1tteUhpZ2hMaWdodF0nIC0gYnV0IGl0J3Mgbm90IGEgcHJvcGVydHkgYmluZGluZyBpbiB0aGF0IHdheSAgaXQncyB3YXkgb2YgZGVmaW5pdGlvbiBuYW1lIGluIERpcmVjdGl2ZXMgIGl0J3MganVzdCBhIHNlbGVjdG9yIG5hbWVcbkBEaXJlY3RpdmUgKHtcbiAgICBzZWxlY3RvcjogJ1tteUhpZ2hsaWdodF0nLFxuICAgIGlucHV0czogWydoaWdobGlnaHRDb2xvcjpteUhpZ2hsaWdodCddLFxuICAgIC8vbWV0YWRhdGEgY29uZmlndXJhdG9yIC0gaW4gaG9zdCB3ZSBjYW4gc3BlY2lmeSBldmVudCB3aGljaCBzaG91bGQgZmlyZSBzb21lIGFjdGlvblxuICAgIGhvc3Q6IHtcbiAgICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxuICAgICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKSdcbiAgICB9XG59KVxuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIHtcbi8vIGV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXR7XG4gIC8vIFBsZWFzZSBub3RlIHRoYXQgYmVjdWFzZSBldmVyeXdoZXJlIHdlIGNhbiBzZWUgZXhwcmVzc2lvbiBcIiBwcml2YXRlICBfZGVmYXVsdENvbG9yOidyZWQnOyBcIiAgLSBpc24ndCBjb3JyZWN0XG4gIC8vIHNvIGNvcnJlY3QgaXMgXCIgcHJpdmF0ZSAgX2RlZmF1bHRDb2xvciA9ICdyZWQnO1wiXG5wcml2YXRlICBfZGVmYXVsdENvbG9yID0gJ2dyZWVuJztcbmhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuLy8gICAgIG5nT25Jbml0KCk6YW55e1xuLy8gICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG4vLyAgICAgfVxuLy8gbGlzdGVuIGV2ZW50IChtb3VzZWVudGVyKSBhbmQgZmlyZSBmdW5jdGlvbiBoaWdobGlnaHRcbiBvbk1vdXNlRW50ZXIoKXtcbiAgICB0aGlzLmhpZ2hsaWdodCh0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG4gfVxuXG4vLyBsaXN0ZW4gZXZlbnQgKG1vdXNlbGVhdmUpIGFuZCBlcmFzZSBhdHRyaWJ1dGUgZGF0YVxuIG9uTW91c2VMZWF2ZSgpe1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIFwiYmFja2dyb3VuZC1jb2xvclwiLCBudWxsKTtcbiB9XG5cbiAvLyBjbGFzcyB3aGljaCBjaGFuZ2UgZWxlbWUgY29sb3IgYXR0ciB0byBkZWZhdWx0IGNvbG9yIG9yIHRvIHNldCBjb2xvclxuICAgIHByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOnN0cmluZyl7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

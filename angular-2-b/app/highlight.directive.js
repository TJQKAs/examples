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
                    // Please note that becuase everywhere we can see expression " private  _defaultColor:'red'; "  - isn't correct
                    // so correct is " private  _defaultColor = 'red';"
                    this._defaultColor = 'green';
                }
                HighlightDirective.prototype.ngOnInit = function () {
                    // this._renderer.setElementStyle(this._elRef, "background-color", this._defaultColor);
                    // this. _elRef.nativeElement.style.backgroundColor = this._defaultColor;
                    this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this._defaultColor);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxvSUFBb0k7WUFPcEk7Z0JBS0ksNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFKckUsK0dBQStHO29CQUMvRyxtREFBbUQ7b0JBQzVDLGtCQUFhLEdBQUcsT0FBTyxDQUFDO2dCQUV5QyxDQUFDO2dCQUN2RSxxQ0FBUSxHQUFSO29CQUNFLHVGQUF1RjtvQkFDdkYseUVBQXlFO29CQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BHLENBQUM7Z0JBaEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM3QixDQUFDOztzQ0FBQTtnQkFjRix5QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsbURBV0MsQ0FBQSIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vL1tteUhpZ2hMaWdodF0nIC0gYnV0IGl0J3Mgbm90IGEgcHJvcGVydHkgYmluZGluZyBpbiB0aGF0IHdheSAgaXQncyB3YXkgb2YgZGVmaW5pdGlvbiBuYW1lIGluIERpcmVjdGl2ZXMgIGl0J3MganVzdCBhIHNlbGVjdG9yIG5hbWVcbkBEaXJlY3RpdmUgKHtcbiAgICBzZWxlY3RvcjogJ1tteUhpZ2hsaWdodF0nLFxuICAgIGlucHV0czogWydoaWdobGlnaHRDb2xvciddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXR7XG4gIC8vIFBsZWFzZSBub3RlIHRoYXQgYmVjdWFzZSBldmVyeXdoZXJlIHdlIGNhbiBzZWUgZXhwcmVzc2lvbiBcIiBwcml2YXRlICBfZGVmYXVsdENvbG9yOidyZWQnOyBcIiAgLSBpc24ndCBjb3JyZWN0XG4gIC8vIHNvIGNvcnJlY3QgaXMgXCIgcHJpdmF0ZSAgX2RlZmF1bHRDb2xvciA9ICdyZWQnO1wiXG5wcml2YXRlICBfZGVmYXVsdENvbG9yID0gJ2dyZWVuJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHt9XG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAvLyB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xuICAgICAgLy8gdGhpcy4gX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

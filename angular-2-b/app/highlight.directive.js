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
                    this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor:myHighlight']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxvSUFBb0k7WUFPcEk7Z0JBTUksNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFMckUsK0dBQStHO29CQUMvRyxtREFBbUQ7b0JBQzVDLGtCQUFhLEdBQUcsT0FBTyxDQUFDO2dCQUd5QyxDQUFDO2dCQUN2RSxxQ0FBUSxHQUFSO29CQUNFLHVGQUF1RjtvQkFDdkYseUVBQXlFO29CQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0gsQ0FBQztnQkFqQkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLENBQUMsNEJBQTRCLENBQUM7cUJBQ3pDLENBQUM7O3NDQUFBO2dCQWVGLHlCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxtREFZQyxDQUFBIiwiZmlsZSI6ImhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbi8vW215SGlnaExpZ2h0XScgLSBidXQgaXQncyBub3QgYSBwcm9wZXJ0eSBiaW5kaW5nIGluIHRoYXQgd2F5ICBpdCdzIHdheSBvZiBkZWZpbml0aW9uIG5hbWUgaW4gRGlyZWN0aXZlcyAgaXQncyBqdXN0IGEgc2VsZWN0b3IgbmFtZVxuQERpcmVjdGl2ZSAoe1xuICAgIHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXG4gICAgaW5wdXRzOiBbJ2hpZ2hsaWdodENvbG9yOm15SGlnaGxpZ2h0J11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgLy8gUGxlYXNlIG5vdGUgdGhhdCBiZWN1YXNlIGV2ZXJ5d2hlcmUgd2UgY2FuIHNlZSBleHByZXNzaW9uIFwiIHByaXZhdGUgIF9kZWZhdWx0Q29sb3I6J3JlZCc7IFwiICAtIGlzbid0IGNvcnJlY3RcbiAgLy8gc28gY29ycmVjdCBpcyBcIiBwcml2YXRlICBfZGVmYXVsdENvbG9yID0gJ3JlZCc7XCJcbnByaXZhdGUgIF9kZWZhdWx0Q29sb3IgPSAnZ3JlZW4nO1xuaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHt9XG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAvLyB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xuICAgICAgLy8gdGhpcy4gX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

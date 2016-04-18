System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_routeParams) {
                    this._routeParams = _routeParams;
                }
                Component1Component.prototype.ngOnInit = function () {
                    this.source = this._routeParams.get('source');
                    this.optional = this._routeParams.get('optional');
                };
                Component1Component = __decorate([
                    core_1.Component({
                        //  selector: "",
                        template: "This is Component1\n  <div>\n    Source is {{source}}\n  </div>\n  <div>This is optional param : {{optional}}</div>\n\n   "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUlHLDZCQUFxQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUUsQ0FBQztnQkFFakQsc0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQXRCSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUVULGlCQUFpQjt3QkFDaEIsUUFBUSxFQUFFLDRIQU1UO3FCQUVILENBQUM7O3VDQUFBO2dCQWFGLDBCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxxREFXQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtSb3V0ZVBhcmFtc31mcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblxuICAvLyAgc2VsZWN0b3I6IFwiXCIsXG4gICB0ZW1wbGF0ZTogYFRoaXMgaXMgQ29tcG9uZW50MVxuICA8ZGl2PlxuICAgIFNvdXJjZSBpcyB7e3NvdXJjZX19XG4gIDwvZGl2PlxuICA8ZGl2PlRoaXMgaXMgb3B0aW9uYWwgcGFyYW0gOiB7e29wdGlvbmFsfX08L2Rpdj5cblxuICAgYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAvL2RlZmluZSBwcm9wZXJ0eVxuICAgc291cmNlOiBzdHJpbmc7XG4gICBvcHRpb25hbDogc3RyaW5nO1xuICAgY29uc3RydWN0b3IgKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyl7fVxuXG4gICBuZ09uSW5pdCgpOmFueXtcbiAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3NvdXJjZScpO1xuICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ29wdGlvbmFsJyk7XG4gICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

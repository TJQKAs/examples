System.register(['angular2/core', 'angular2/router', './component1-main.component', './component1-sub.component'], function(exports_1, context_1) {
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
    var core_1, router_1, component1_main_component_1, component1_sub_component_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component1_main_component_1_1) {
                component1_main_component_1 = component1_main_component_1_1;
            },
            function (component1_sub_component_1_1) {
                component1_sub_component_1 = component1_sub_component_1_1;
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
                        template: "This is Component1\n  <div>\n    Source is {{source}}\n  </div>\n  <div>This is optional param : {{optional}}</div>\n  <div><a [routerLink]=\"['Component1Main']\"> This main path</a></div>\n    <div><a [routerLink]=\"['Component1Sub']\">This sub path </a></div>\n  <router-outlet></router-outlet>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        //  that's how we extend the url of component1 e.g. everything which passes after '/' ;
                        { path: '/', name: 'Component1Main', component: component1_main_component_1.Comp1MainComponent, useAsDefault: true },
                        { path: '/subroute', name: 'Component1Sub', component: component1_sub_component_1.Comp1SubComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUlHLDZCQUFxQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUUsQ0FBQztnQkFFakQsc0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQS9CSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUVULGlCQUFpQjt3QkFDaEIsUUFBUSxFQUFFLCtTQVFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUVqQyxDQUFDO29CQUVELG9CQUFXLENBQUU7d0JBQ1osdUZBQXVGO3dCQUN2RixFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSw4Q0FBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNuRixFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsNENBQWlCLEVBQUM7cUJBQzFFLENBQUM7O3VDQUFBO2dCQWFGLDBCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxxREFXQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtSb3V0ZVBhcmFtcywgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfWZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnR7Q29tcDFNYWluQ29tcG9uZW50fWZyb20gJy4vY29tcG9uZW50MS1tYWluLmNvbXBvbmVudCc7XG5pbXBvcnR7Q29tcDFTdWJDb21wb25lbnR9ZnJvbSAnLi9jb21wb25lbnQxLXN1Yi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblxuICAvLyAgc2VsZWN0b3I6IFwiXCIsXG4gICB0ZW1wbGF0ZTogYFRoaXMgaXMgQ29tcG9uZW50MVxuICA8ZGl2PlxuICAgIFNvdXJjZSBpcyB7e3NvdXJjZX19XG4gIDwvZGl2PlxuICA8ZGl2PlRoaXMgaXMgb3B0aW9uYWwgcGFyYW0gOiB7e29wdGlvbmFsfX08L2Rpdj5cbiAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDFNYWluJ11cIj4gVGhpcyBtYWluIHBhdGg8L2E+PC9kaXY+XG4gICAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDFTdWInXVwiPlRoaXMgc3ViIHBhdGggPC9hPjwvZGl2PlxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICBgLFxuICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxuXG59KVxuXG5AUm91dGVDb25maWcgKFtcbiAgLy8gIHRoYXQncyBob3cgd2UgZXh0ZW5kIHRoZSB1cmwgb2YgY29tcG9uZW50MSBlLmcuIGV2ZXJ5dGhpbmcgd2hpY2ggcGFzc2VzIGFmdGVyICcvJyA7XG4gIHtwYXRoOicvJywgbmFtZTogJ0NvbXBvbmVudDFNYWluJywgY29tcG9uZW50OiBDb21wMU1haW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6Jy9zdWJyb3V0ZScsIG5hbWU6ICdDb21wb25lbnQxU3ViJywgY29tcG9uZW50OiBDb21wMVN1YkNvbXBvbmVudH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuIC8vZGVmaW5lIHByb3BlcnR5XG4gICBzb3VyY2U6IHN0cmluZztcbiAgIG9wdGlvbmFsOiBzdHJpbmc7XG4gICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKXt9XG5cbiAgIG5nT25Jbml0KCk6YW55e1xuICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnc291cmNlJyk7XG4gICAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnb3B0aW9uYWwnKTtcbiAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

System.register(['angular2/core', 'angular2/router', './component1.component', './component2.component'], function(exports_1, context_1) {
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
    var core_1, router_1, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <header>\n     <ul>\n       <li><a [routerLink]=\"['Component1']\">Component1</a></li>\n       <li><a [routerLink]=\"['Component2']\">Component2</a></li>\n     </ul>\n   </header>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        // 1)path; 2) name of route's identification; 3) which component should handle this route
                        { path: ' /component-1', name: 'Component1', component: component1_component_1.Component1Component },
                        { path: ' /component-2', name: 'Component2', component: component2_component_1.Component2Component }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHFPQVFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gseUZBQXlGO3dCQUN4RixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7d0JBQzVFLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztxQkFDN0UsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9ZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydHtDb21wb25lbnQxQ29tcG9uZW50fWZyb20gJy4vY29tcG9uZW50MS5jb21wb25lbnQnO1xuaW1wb3J0e0NvbXBvbmVudDJDb21wb25lbnR9ZnJvbSAnLi9jb21wb25lbnQyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICA8aGVhZGVyPlxuICAgICA8dWw+XG4gICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29tcG9uZW50MSddXCI+Q29tcG9uZW50MTwvYT48L2xpPlxuICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDInXVwiPkNvbXBvbmVudDI8L2E+PC9saT5cbiAgICAgPC91bD5cbiAgIDwvaGVhZGVyPlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG4vLyBhcnJheSBjb25zaXN0cyBvZiBhbGwgcm91dGVzIHdoaWNoIHdlIGdvbm5hIHVzZSB3aXRoIHRoaXMgY29tcG9uZW50XG5AUm91dGVDb25maWcoW1xuICAvLyAxKXBhdGg7IDIpIG5hbWUgb2Ygcm91dGUncyBpZGVudGlmaWNhdGlvbjsgMykgd2hpY2ggY29tcG9uZW50IHNob3VsZCBoYW5kbGUgdGhpcyByb3V0ZVxuICAge3BhdGg6ICcgL2NvbXBvbmVudC0xJywgbmFtZTogJ0NvbXBvbmVudDEnLCBjb21wb25lbnQ6IENvbXBvbmVudDFDb21wb25lbnQgfSxcbiAgIHtwYXRoOiAnIC9jb21wb25lbnQtMicsIG5hbWU6ICdDb21wb25lbnQyJywgY29tcG9uZW50OiBDb21wb25lbnQyQ29tcG9uZW50fVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

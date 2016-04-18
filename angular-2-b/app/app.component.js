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
                        template: "\n   <header>\n     <ul>\n       <li><a [routerLink]=\"['Component1', {source:'AppComponent', optional:'This is optional'}]\">Component1</a></li>\n       <li><a [routerLink]=\"['Component2']\">Component2</a></li>\n     </ul>\n   </header>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        // 1)path; 2) name of route's identification; 3) which component should handle this route
                        //' /component-1/   (this is param which we add to component) :source',
                        { path: ' /component-1/:source', name: 'Component1', component: component1_component_1.Component1Component },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF4QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJSQVFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gseUZBQXlGO3dCQUN4Rix1RUFBdUU7d0JBQ3ZFLEVBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFDO3dCQUNuRixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7cUJBQzdFLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnR7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfWZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnR7Q29tcG9uZW50MUNvbXBvbmVudH1mcm9tICcuL2NvbXBvbmVudDEuY29tcG9uZW50JztcbmltcG9ydHtDb21wb25lbnQyQ29tcG9uZW50fWZyb20gJy4vY29tcG9uZW50Mi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgPGhlYWRlcj5cbiAgICAgPHVsPlxuICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDEnLCB7c291cmNlOidBcHBDb21wb25lbnQnLCBvcHRpb25hbDonVGhpcyBpcyBvcHRpb25hbCd9XVwiPkNvbXBvbmVudDE8L2E+PC9saT5cbiAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydDb21wb25lbnQyJ11cIj5Db21wb25lbnQyPC9hPjwvbGk+XG4gICAgIDwvdWw+XG4gICA8L2hlYWRlcj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuLy8gYXJyYXkgY29uc2lzdHMgb2YgYWxsIHJvdXRlcyB3aGljaCB3ZSBnb25uYSB1c2Ugd2l0aCB0aGlzIGNvbXBvbmVudFxuQFJvdXRlQ29uZmlnKFtcbiAgLy8gMSlwYXRoOyAyKSBuYW1lIG9mIHJvdXRlJ3MgaWRlbnRpZmljYXRpb247IDMpIHdoaWNoIGNvbXBvbmVudCBzaG91bGQgaGFuZGxlIHRoaXMgcm91dGVcbiAgIC8vJyAvY29tcG9uZW50LTEvICAgKHRoaXMgaXMgcGFyYW0gd2hpY2ggd2UgYWRkIHRvIGNvbXBvbmVudCkgOnNvdXJjZScsXG4gICB7cGF0aDogJyAvY29tcG9uZW50LTEvOnNvdXJjZScsIG5hbWU6ICdDb21wb25lbnQxJywgY29tcG9uZW50OiBDb21wb25lbnQxQ29tcG9uZW50fSxcbiAgIHtwYXRoOiAnIC9jb21wb25lbnQtMicsIG5hbWU6ICdDb21wb25lbnQyJywgY29tcG9uZW50OiBDb21wb25lbnQyQ29tcG9uZW50fVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

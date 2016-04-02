System.register(['angular2/core', './component1.component', './component2.component'], function(exports_1, context_1) {
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
    var core_1, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        template: "<h1>hello everybody</h1>\n    <component-1></component-1>\n    <component-2></component-2>",
                        directives: [component1_component_1.Component1Component, component2_component_1.Component2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVhEO29CQUFDLGdCQUFTLENBQUM7d0JBRVAsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0RkFFa0I7d0JBQzVCLFVBQVUsRUFBQyxDQUFDLDBDQUFtQixFQUFFLDBDQUFtQixDQUFDO3FCQUV4RCxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnQxQ29tcG9uZW50fWZyb20gJy4vY29tcG9uZW50MS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnQyQ29tcG9uZW50fWZyb20gJy4vY29tcG9uZW50Mi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYDxoMT5oZWxsbyBldmVyeWJvZHk8L2gxPlxuICAgIDxjb21wb25lbnQtMT48L2NvbXBvbmVudC0xPlxuICAgIDxjb21wb25lbnQtMj48L2NvbXBvbmVudC0yPmAsXG4gICAgZGlyZWN0aXZlczpbQ29tcG9uZW50MUNvbXBvbmVudCwgQ29tcG9uZW50MkNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

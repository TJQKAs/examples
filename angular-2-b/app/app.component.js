System.register(['angular2/core', "./my-component.component"], function(exports_1, context_1) {
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
    var core_1, my_component_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_component_component_1_1) {
                my_component_component_1 = my_component_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // find tag in html with the name my-app and execute the code below in
                        selector: 'my-app',
                        // by template we specify action here is just string, but we can set a link or extra document
                        //for exampleby templateUrl - http:// ....
                        //
                        template: "\n        <h1>Angular 2 Boilerplate</h1>\n        <p>Hello World!</p>\n        <li>this is a test</li>\n        <p>\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 Oculus Rift\n         \u0438\u043B\u0438 HTC Vive, \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B Sulon Q \u043D\u0435\n         \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0448\u043B\u0435\u043C \u043A \u041F\u041A, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443\n          \u043E\u043D \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u043D\u043E\u0441\u0438\u043C\u044B\u0439\n           \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440, \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0439 \u043F\u043E\u0434 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C OC\n           Windows 10. \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 \u043D\u0430\u0437\u044B\u0432\u0430\u044E\u0442 Sulon Q\n           \u043F\u0435\u0440\u0432\u044B\u043C \u0432 \u043C\u0438\u0440\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u043C \u0432 \u0441\u0432\u043E\u0435\u043C \u0440\u043E\u0434\u0435.\n</p>\n  <my-component></my-component>\n    ",
                        //we need MyComponentComponent and put it into my-component 
                        directives: [my_component_component_1.MyComponentComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkExQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxzRUFBc0U7d0JBQ3BFLFFBQVEsRUFBRSxRQUFRO3dCQUNsQiw2RkFBNkY7d0JBQzdGLDBDQUEwQzt3QkFDMUMsRUFBRTt3QkFDRixRQUFRLEVBQUUsMDZDQWFUO3dCQUNELDREQUE0RDt3QkFDNUQsVUFBVSxFQUFHLENBQUMsNkNBQW9CLENBQUM7cUJBQ3RDLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vLyBpbXBvcnQgc2Vjb25kIGNvbXBvbmVudCAsIG1ha2UgZGlyZWN0aXZlcyBiZWxvdyBhbmQgYXBwZW4gbXktY29tcG9uZW50ICBodG1sIHRhZ3NcbmltcG9ydCB7TXlDb21wb25lbnRDb21wb25lbnR9IGZyb20gXCIuL215LWNvbXBvbmVudC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIC8vIGZpbmQgdGFnIGluIGh0bWwgd2l0aCB0aGUgbmFtZSBteS1hcHAgYW5kIGV4ZWN1dGUgdGhlIGNvZGUgYmVsb3cgaW5cbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgLy8gYnkgdGVtcGxhdGUgd2Ugc3BlY2lmeSBhY3Rpb24gaGVyZSBpcyBqdXN0IHN0cmluZywgYnV0IHdlIGNhbiBzZXQgYSBsaW5rIG9yIGV4dHJhIGRvY3VtZW50XG4gICAgLy9mb3IgZXhhbXBsZWJ5IHRlbXBsYXRlVXJsIC0gaHR0cDovLyAuLi4uXG4gICAgLy9cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+QW5ndWxhciAyIEJvaWxlcnBsYXRlPC9oMT5cbiAgICAgICAgPHA+SGVsbG8gV29ybGQhPC9wPlxuICAgICAgICA8bGk+dGhpcyBpcyBhIHRlc3Q8L2xpPlxuICAgICAgICA8cD7QkiDQvtGC0LvQuNGH0LjQtSDQvtGCINGD0YHRgtGA0L7QudGB0YLQsiBPY3VsdXMgUmlmdFxuICAgICAgICAg0LjQu9C4IEhUQyBWaXZlLCDQtNC70Y8g0YDQsNCx0L7RgtGLIFN1bG9uIFEg0L3QtVxuICAgICAgICAg0YLRgNC10LHRg9C10YLRgdGPINC/0L7QtNC60LvRjtGH0LDRgtGMINGI0LvQtdC8INC6INCf0JosINC/0L7RgdC60L7Qu9GM0LrRg1xuICAgICAgICAgINC+0L0g0L/RgNC10LTRgdGC0LDQstC70Y/QtdGCINGB0L7QsdC+0Lkg0LDQstGC0L7QvdC+0LzQvdGL0Lkg0L3QvtGB0LjQvNGL0LlcbiAgICAgICAgICAg0LrQvtC80L/RjNGO0YLQtdGALCDRgNCw0LHQvtGC0LDRjtGJ0LjQuSDQv9C+0LQg0YPQv9GA0LDQstC70LXQvdC40LXQvCBPQ1xuICAgICAgICAgICBXaW5kb3dzIDEwLiDQoNCw0LfRgNCw0LHQvtGC0YfQuNC60Lgg0L3QsNC30YvQstCw0Y7RgiBTdWxvbiBRXG4gICAgICAgICAgINC/0LXRgNCy0YvQvCDQsiDQvNC40YDQtSDRg9GB0YLRgNC+0LnRgdGC0LLQvtC8INCyINGB0LLQvtC10Lwg0YDQvtC00LUuXG48L3A+XG4gIDxteS1jb21wb25lbnQ+PC9teS1jb21wb25lbnQ+XG4gICAgYCxcbiAgICAvL3dlIG5lZWQgTXlDb21wb25lbnRDb21wb25lbnQgYW5kIHB1dCBpdCBpbnRvIG15LWNvbXBvbmVudCBcbiAgICBkaXJlY3RpdmVzIDogW015Q29tcG9uZW50Q29tcG9uZW50XVxufSlcbi8vIHRoaXMgb3VyIGRlZmF1bHQgY2xhc3NcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

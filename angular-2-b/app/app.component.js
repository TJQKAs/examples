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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF6QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxzRUFBc0U7d0JBQ3BFLFFBQVEsRUFBRSxRQUFRO3dCQUNsQiw2RkFBNkY7d0JBQzdGLDBDQUEwQzt3QkFDMUMsRUFBRTt3QkFDRixRQUFRLEVBQUUsMDZDQWFUO3dCQUNELFVBQVUsRUFBRyxDQUFDLDZDQUFvQixDQUFDO3FCQUN0QyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy8gaW1wb3J0IHNlY29uZCBjb21wb25lbnQgLCBtYWtlIGRpcmVjdGl2ZXMgYmVsb3cgYW5kIGFwcGVuIG15LWNvbXBvbmVudCAgaHRtbCB0YWdzIFxuaW1wb3J0IHtNeUNvbXBvbmVudENvbXBvbmVudH0gZnJvbSBcIi4vbXktY29tcG9uZW50LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZmluZCB0YWcgaW4gaHRtbCB3aXRoIHRoZSBuYW1lIG15LWFwcCBhbmQgZXhlY3V0ZSB0aGUgY29kZSBiZWxvdyBpblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICAvLyBieSB0ZW1wbGF0ZSB3ZSBzcGVjaWZ5IGFjdGlvbiBoZXJlIGlzIGp1c3Qgc3RyaW5nLCBidXQgd2UgY2FuIHNldCBhIGxpbmsgb3IgZXh0cmEgZG9jdW1lbnRcbiAgICAvL2ZvciBleGFtcGxlYnkgdGVtcGxhdGVVcmwgLSBodHRwOi8vIC4uLi5cbiAgICAvL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5Bbmd1bGFyIDIgQm9pbGVycGxhdGU8L2gxPlxuICAgICAgICA8cD5IZWxsbyBXb3JsZCE8L3A+XG4gICAgICAgIDxsaT50aGlzIGlzIGEgdGVzdDwvbGk+XG4gICAgICAgIDxwPtCSINC+0YLQu9C40YfQuNC1INC+0YIg0YPRgdGC0YDQvtC50YHRgtCyIE9jdWx1cyBSaWZ0XG4gICAgICAgICDQuNC70LggSFRDIFZpdmUsINC00LvRjyDRgNCw0LHQvtGC0YsgU3Vsb24gUSDQvdC1XG4gICAgICAgICDRgtGA0LXQsdGD0LXRgtGB0Y8g0L/QvtC00LrQu9GO0YfQsNGC0Ywg0YjQu9C10Lwg0Log0J/Qmiwg0L/QvtGB0LrQvtC70YzQutGDXG4gICAgICAgICAg0L7QvSDQv9GA0LXQtNGB0YLQsNCy0LvRj9C10YIg0YHQvtCx0L7QuSDQsNCy0YLQvtC90L7QvNC90YvQuSDQvdC+0YHQuNC80YvQuVxuICAgICAgICAgICDQutC+0LzQv9GM0Y7RgtC10YAsINGA0LDQsdC+0YLQsNGO0YnQuNC5INC/0L7QtCDRg9C/0YDQsNCy0LvQtdC90LjQtdC8IE9DXG4gICAgICAgICAgIFdpbmRvd3MgMTAuINCg0LDQt9GA0LDQsdC+0YLRh9C40LrQuCDQvdCw0LfRi9Cy0LDRjtGCIFN1bG9uIFFcbiAgICAgICAgICAg0L/QtdGA0LLRi9C8INCyINC80LjRgNC1INGD0YHRgtGA0L7QudGB0YLQstC+0Lwg0LIg0YHQstC+0LXQvCDRgNC+0LTQtS5cbjwvcD5cbiAgPG15LWNvbXBvbmVudD48L215LWNvbXBvbmVudD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXMgOiBbTXlDb21wb25lbnRDb21wb25lbnRdXG59KVxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

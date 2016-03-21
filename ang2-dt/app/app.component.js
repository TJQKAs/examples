System.register(['angular2/core', './prop-binding.component'], function(exports_1, context_1) {
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
    var core_1, prop_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (prop_binding_component_1_1) {
                prop_binding_component_1 = prop_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // in input field we type name and use two-way databinding to convey to child component "prop-binding-component"
                        // by ngModel .. also name should appear in our arrow braces prop-binding-component - data which the child class
                        // will export from prop-binding-component.ts ...
                        selector: 'my-app',
                        template: "\n <h1 class=\"{{'parent'}}\">Parent component</h1>\n <h2>Please type your name below</h2>\n <input type=\"text\" [(ngModel)]=\"name\">\n <br/><br/>\n <p>{{name}}</p>\n <section class=\"child\">\n <my-prop-binding [myName] = \"name\"  [myAge] = \"40\"></my-prop-binding>\n </section>",
                        directives: [prop_binding_component_1.PropBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0csU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFFYixDQUFDO2dCQXRCRTtvQkFBQyxnQkFBUyxDQUFFO3dCQUVmLGdIQUFnSDt3QkFDaEgsZ0hBQWdIO3dCQUNoSCxpREFBaUQ7d0JBQy9DLFFBQVEsRUFBRSxRQUFRO3dCQUNuQixRQUFRLEVBQUUsNlJBUUM7d0JBQ1gsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7cUJBRWxDLENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCx1Q0FHQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb3BCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3AtYmluZGluZy5jb21wb25lbnQnO1xuXG4gICBAQ29tcG9uZW50ICh7XG5cbi8vIGluIGlucHV0IGZpZWxkIHdlIHR5cGUgbmFtZSBhbmQgdXNlIHR3by13YXkgZGF0YWJpbmRpbmcgdG8gY29udmV5IHRvIGNoaWxkIGNvbXBvbmVudCBcInByb3AtYmluZGluZy1jb21wb25lbnRcIlxuLy8gYnkgbmdNb2RlbCAuLiBhbHNvIG5hbWUgc2hvdWxkIGFwcGVhciBpbiBvdXIgYXJyb3cgYnJhY2VzIHByb3AtYmluZGluZy1jb21wb25lbnQgLSBkYXRhIHdoaWNoIHRoZSBjaGlsZCBjbGFzc1xuLy8gd2lsbCBleHBvcnQgZnJvbSBwcm9wLWJpbmRpbmctY29tcG9uZW50LnRzIC4uLlxuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gdGVtcGxhdGU6IGBcbiA8aDEgY2xhc3M9XCJ7eydwYXJlbnQnfX1cIj5QYXJlbnQgY29tcG9uZW50PC9oMT5cbiA8aDI+UGxlYXNlIHR5cGUgeW91ciBuYW1lIGJlbG93PC9oMj5cbiA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiA8YnIvPjxici8+XG4gPHA+e3tuYW1lfX08L3A+XG4gPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxuIDxteS1wcm9wLWJpbmRpbmcgW215TmFtZV0gPSBcIm5hbWVcIiAgW215QWdlXSA9IFwiNDBcIj48L215LXByb3AtYmluZGluZz5cbiA8L3NlY3Rpb24+YCxcbiBkaXJlY3RpdmVzOiBbUHJvcEJpbmRpbmdDb21wb25lbnRdXG5cbn0pXG4vLyB0aGlzIG91ciBkZWZhdWx0IGNsYXNzXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgIG5hbWUgPSBcIlwiO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

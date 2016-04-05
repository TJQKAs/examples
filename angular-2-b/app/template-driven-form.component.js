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
    var TemplateDrivenFromComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //    <form (ngSubmit)="onSubmit(f)" #f="ngFrom">
            // by clicking button submit we call function onSubmit with argument #f
            // and #f is a reference to  ngForm , which includes all elems in elem form
            // thus we submit data from all forms which belong to <form>
            TemplateDrivenFromComponent = (function () {
                function TemplateDrivenFromComponent() {
                }
                TemplateDrivenFromComponent.prototype.onSubmit = function (value) {
                    console.log(value.value);
                };
                TemplateDrivenFromComponent = __decorate([
                    core_1.Component({
                        selector: 'template-driven-form',
                        template: "\n   <h2>Sing up form</h2>\n   <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n     <div>\n       <label for=\"name\">Name:</label>\n       <input ngControl=\"name\" type=\"text\" id=\"name\" required>\n     </div>\n     <div>\n       <label for=\"surname\">Surname:</label>\n       <input ngControl=\"surname\" type=\"text\" id=\"surname\" required>\n     </div>\n     <div>\n       <label for=\"age\">Age:</label>\n       <input ngControl=\"age\" type=\"number\" id=\"age\" required>\n     </div>\n     <div>\n       <label for=\"country\">Country:</label>\n       <input ngControl=\"counrty\" type=\"text\" id=\"counrty\" required>\n     </div>\n     <div>\n       <label for=\"mail\">Mail:</label>\n       <input ngControl=\"mail\" type=\"text\" id=\"mail\" required>\n     </div>\n     <div>\n       <label for=\"password\">Password:</label>\n       <input ngControl=\"password\" type=\"text\" id=\"name\" required>\n     </div>\n     <div>\n       <label for=\"confirm-password\">Confirm Password:</label>\n       <input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required>\n     </div>\n     <button type=\"submit\">Submit</button>\n   </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFromComponent);
                return TemplateDrivenFromComponent;
            }());
            exports_1("TemplateDrivenFromComponent", TemplateDrivenFromComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLGlEQUFpRDtZQUNqRCx1RUFBdUU7WUFDdkUsMkVBQTJFO1lBQzNFLDREQUE0RDtZQXVDNUQ7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFIQyw4Q0FBUSxHQUFSLFVBQVMsS0FBSztvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkExQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUMsK3BDQWlDUjtxQkFDRixDQUFDOzsrQ0FBQTtnQkFPRixrQ0FBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQscUVBS0MsQ0FBQSIsImZpbGUiOiJ0ZW1wbGF0ZS1kcml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7Q29tcG9uZW50fWZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vLyAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRnJvbVwiPlxuLy8gYnkgY2xpY2tpbmcgYnV0dG9uIHN1Ym1pdCB3ZSBjYWxsIGZ1bmN0aW9uIG9uU3VibWl0IHdpdGggYXJndW1lbnQgI2Zcbi8vIGFuZCAjZiBpcyBhIHJlZmVyZW5jZSB0byAgbmdGb3JtICwgd2hpY2ggaW5jbHVkZXMgYWxsIGVsZW1zIGluIGVsZW0gZm9ybVxuLy8gdGh1cyB3ZSBzdWJtaXQgZGF0YSBmcm9tIGFsbCBmb3JtcyB3aGljaCBiZWxvbmcgdG8gPGZvcm0+XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZW1wbGF0ZS1kcml2ZW4tZm9ybScsXG4gIHRlbXBsYXRlOmBcbiAgIDxoMj5TaW5nIHVwIGZvcm08L2gyPlxuICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgPGRpdj5cbiAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICA8aW5wdXQgbmdDb250cm9sPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgIDwvZGl2PlxuICAgICA8ZGl2PlxuICAgICAgIDxsYWJlbCBmb3I9XCJzdXJuYW1lXCI+U3VybmFtZTo8L2xhYmVsPlxuICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJzdXJuYW1lXCIgdHlwZT1cInRleHRcIiBpZD1cInN1cm5hbWVcIiByZXF1aXJlZD5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXY+XG4gICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPkFnZTo8L2xhYmVsPlxuICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJhZ2VcIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJhZ2VcIiByZXF1aXJlZD5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXY+XG4gICAgICAgPGxhYmVsIGZvcj1cImNvdW50cnlcIj5Db3VudHJ5OjwvbGFiZWw+XG4gICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvdW5ydHlcIiB0eXBlPVwidGV4dFwiIGlkPVwiY291bnJ0eVwiIHJlcXVpcmVkPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdj5cbiAgICAgICA8bGFiZWwgZm9yPVwibWFpbFwiPk1haWw6PC9sYWJlbD5cbiAgICAgICA8aW5wdXQgbmdDb250cm9sPVwibWFpbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgcmVxdWlyZWQ+XG4gICAgIDwvZGl2PlxuICAgICA8ZGl2PlxuICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXY+XG4gICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm0tcGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvbmZpcm0tcGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICA8L2Rpdj5cbiAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICA8L2Zvcm0+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURyaXZlbkZyb21Db21wb25lbnR7XG5cbiAgb25TdWJtaXQodmFsdWUpe1xuICAgIGNvbnNvbGUubG9nKHZhbHVlLnZhbHVlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

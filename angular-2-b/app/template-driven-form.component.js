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
    var TemplateDrivenFormComponent;
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
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent() {
                    this.user = { name: ' ', surname: ' ', age: ' ', mail: ' ', country: ' ' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user.name = form.value['name'];
                    this.user.surname = form.value['surname'];
                    this.user.age = form.value['age'];
                    this.user.mail = form.value['mail'];
                    this.user.country = form.value['country'];
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'template-driven-form',
                        template: "\n   <h2>Sing up form</h2>\n   <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n     <div>\n       <label for=\"name\">Name:</label>\n       <input ngControl=\"name\" type=\"text\" id=\"name\" #name=\"ngForm\" required>\n      <span class=\"validation-error\" *ngIf=\"!name.valid\">not valid</span>\n     </div>\n     <div>\n       <label for=\"surname\">Surname:</label>\n       <input ngControl=\"surname\" type=\"text\" id=\"surname\" #surname=\"ngForm\" required>\n       <span class=\"validation-error\" *ngIf=\"!surname.valid\">not valid</span>\n     </div>\n     <div>\n       <label for=\"age\">Age:</label>\n       <input ngControl=\"age\" type=\"number\" id=\"age\" #age=\"ngForm\" required>\n        <span class=\"validation-error\" *ngIf=\"!age.valid\">not valid</span>\n     </div>\n     <div>\n       <label for=\"country\">Country:</label>\n       <input ngControl=\"counrty\" type=\"text\" id=\"counrty\" required>\n     </div>\n     <div>\n       <label for=\"mail\">Mail:</label>\n       <input ngControl=\"mail\" type=\"text\" id=\"mail\" #mail=\"ngForm\" required>\n       <span class=\"validation-error\" *ngIf=\"!mail.valid\">not valid</span>\n     </div>\n     <div>\n       <label for=\"password\">Password:</label>\n       <input ngControl=\"password\" type=\"text\" id=\"name\" #password=\"ngForm\" required>\n        <span class=\"validation-error\" *ngIf=\"!password.valid\">not valid</span>\n     </div>\n     <div>\n       <label for=\"confirm-password\">Confirm Password:</label>\n       <input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" #confirmPassword=\"ngForm\" required>\n        <span class=\"validation-error\" *ngIf=\"!confirmPassword.valid\">not valid</span>\n     </div>\n     <button type=\"submit\" [disabled]=\"!f.valid || password.value !== confirmPassword.value\">Submit</button>\n      </form>\n   <div [style.display]=\"f.valid === false ? 'none' : 'block' \">\n     <h4>Data which you've just typed</h4>\n     <h5>name: {{user.name}}</h5>\n     <h5>surname: {{user.surname}}</h5>\n     <h5>age: {{user.age}}</h5>\n     <h5>mail: {{user.mail}}</h5>\n     <h5>counrty: {{user.age}}</h5>\n   </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});
//# sourceMappingURL=template-driven-form.component.js.map
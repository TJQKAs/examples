System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DataDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //    <form (ngSubmit)="onSubmit(f)" #f="ngFrom">
            // by clicking button submit we call function onSubmit with argument #f
            // and #f is a reference to  ngForm , which includes all elems in elem form
            // thus we submit data from all forms which belong to <form>
            DataDrivenFormComponent = (function () {
                // FormBuilder - service that creates forms and our refernce to it - _formBuilder
                function DataDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { occupation: ' ', education: ' ', annual: ' ' };
                }
                DataDrivenFormComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                    this.user.occupation = form.value['occupation'];
                    this.user.education = form.value['education'];
                    this.user.annual = form.value['annual'];
                };
                //:any means that it might be whatever argument in OnInit
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    //access to FormBuilder and run method group
                    // in left side my prop which responsible for controlling of my forms (3 elems in this case)
                    // in right side I tell : let  "this.myFrom" be equal to my new control  method "group"
                    // which I've created by using FromBuilder service
                    this.myForm = this._formBuilder.group({
                        // 'name of  object' :[' default meaning', validation logic (in our case Validators.reqiured means that we only check whether our form is not empty)]
                        'occupation': ['', common_1.Validators.required],
                        'education': ['', common_1.Validators.required],
                        'annual': ['', common_1.Validators.required],
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'data-driven-form',
                        template: "\n   <h2>Additional information</h2>\n   <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n     <div>\n       <label for=\"occupation\">Occupation:</label>\n       <input [ngFormControl]=\"myForm.controls['occupation']\" type=\"text\" id=\"occupation\">\n      <span class=\"validaton-error\">not valid</span>\n     </div>\n     <div>\n       <label for=\"education\">Education:</label>\n       <input [ngFormControl]=\"myForm.controls['education']\" type=\"text\" id=\"education\">\n       <span class=\"validaton-error\">not valid</span>\n     </div>\n     <div>\n       <label for=\"annual\">Annual income:</label>\n       <input [ngFormControl]=\"myForm.controls['annual']\" type=\"number\" id=\"annual\">\n        <span class=\"validaton-error\">not valid</span>\n     </div>\n     <button type=\"submit\">Submit</button>\n      </form>\n   <div>\n     <h4> Your additional information are: </h4>\n     <h5>Your occupation: {{user.occupation}}</h5>\n     <h5>Your education: {{user.education}}</h5>\n     <h5>Your annual income: {{user.annual}}</h5>\n   </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});
//# sourceMappingURL=data-driven-form.component.js.map
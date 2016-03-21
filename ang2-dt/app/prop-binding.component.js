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
    var core_1, core_2;
    var PropBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            PropBindingComponent = (function () {
                function PropBindingComponent() {
                    this.myName = '';
                    this.hisName = "His name Georg";
                    // export decorator
                    this.age = "34";
                    this.hobbiesChange = new core_1.EventEmitter();
                }
                PropBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChange.emit(hobbies);
                };
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropBindingComponent.prototype, "age", void 0);
                PropBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-prop-binding',
                        template: "\n               <h2>This is a child Component</h2>\n               <h2>Hello, {{name}} and I am {{age}}</h2>\n               <h2>{{hisName}}</h2>\n               <h4>I have hobbies:</h4>\n              <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies >\n  ",
                        // we use - 'inputs' to check that this is exactly 'myName' from the parent class so which we'll convey to parent Component by exporting with
                        // PropBindingComponent class
                        inputs: ['name:myName'],
                        outputs: ['hobbiesChange']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropBindingComponent);
                return PropBindingComponent;
            }());
            exports_1("PropBindingComponent", PropBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3AtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUFBO29CQUNHLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBQ1osWUFBTyxHQUFHLGdCQUFnQixDQUFDO29CQUMzQixtQkFBbUI7b0JBQ0YsUUFBRyxHQUFHLElBQUksQ0FBQztvQkFFN0Isa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFLN0MsQ0FBQztnQkFIQywrQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBZTtvQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxDQUFFLE9BQU8sQ0FBQzs7aUVBQUE7Z0JBcEJsQjtvQkFBQyxnQkFBUyxDQUFFO3dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSw0UkFNVDt3QkFDRCw2SUFBNkk7d0JBQzdJLDZCQUE2Qjt3QkFDN0IsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUN2QixPQUFPLEVBQUMsQ0FBQyxlQUFlLENBQUM7cUJBQzFCLENBQUM7O3dDQUFBO2dCQWNGLDJCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1REFXQyxDQUFBIiwiZmlsZSI6InByb3AtYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFdmVudEVtaXR0ZXIgLSBhbGxvd3MgdXMgZW1pdCBldmVudHNcbmltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0e0lucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICBzZWxlY3RvcjogJ215LXByb3AtYmluZGluZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgICA8aDI+VGhpcyBpcyBhIGNoaWxkIENvbXBvbmVudDwvaDI+XG4gICAgICAgICAgICAgICA8aDI+SGVsbG8sIHt7bmFtZX19IGFuZCBJIGFtIHt7YWdlfX08L2gyPlxuICAgICAgICAgICAgICAgPGgyPnt7aGlzTmFtZX19PC9oMj5cbiAgICAgICAgICAgICAgIDxoND5JIGhhdmUgaG9iYmllczo8L2g0PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwib25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzLnZhbHVlKVwiICNob2JiaWVzID5cbiAgYCxcbiAgLy8gd2UgdXNlIC0gJ2lucHV0cycgdG8gY2hlY2sgdGhhdCB0aGlzIGlzIGV4YWN0bHkgJ215TmFtZScgZnJvbSB0aGUgcGFyZW50IGNsYXNzIHNvIHdoaWNoIHdlJ2xsIGNvbnZleSB0byBwYXJlbnQgQ29tcG9uZW50IGJ5IGV4cG9ydGluZyB3aXRoXG4gIC8vIFByb3BCaW5kaW5nQ29tcG9uZW50IGNsYXNzXG4gIGlucHV0czogWyduYW1lOm15TmFtZSddLFxuICBvdXRwdXRzOlsnaG9iYmllc0NoYW5nZSddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wQmluZGluZ0NvbXBvbmVudCB7XG4gICBteU5hbWUgPSAnJztcbiAgIGhpc05hbWUgPSBcIkhpcyBuYW1lIEdlb3JnXCI7XG4gICAvLyBleHBvcnQgZGVjb3JhdG9yXG4gIEBJbnB1dCAoJ215QWdlJykgIGFnZSA9IFwiMzRcIjtcblxuICBob2JiaWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpe1xuICAgdGhpcy5ob2JiaWVzQ2hhbmdlLmVtaXQoaG9iYmllcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

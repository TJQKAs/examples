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
    var PropBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropBindingComponent = (function () {
                function PropBindingComponent() {
                    this.myName = '';
                    this.hisName = "His name Georg";
                    this.myAge = "34";
                }
                PropBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-prop-binding',
                        template: "\n               <h2>This is a child Component</h2>\n               <h2>Hello, {{myName}} and I am {{myAge}}</h2>\n               <h2>{{hisName}}</h2>\n  ",
                        // we use - 'inputs' to check that this is exactly 'myName' from the parent class so which we'll convey to parent Component by exporting with
                        // PropBindingComponent class
                        inputs: ['myName', 'myAge']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropBindingComponent);
                return PropBindingComponent;
            }());
            exports_1("PropBindingComponent", PropBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3AtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDRyxXQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNaLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztvQkFDM0IsVUFBSyxHQUFHLElBQUksQ0FBQTtnQkFDZixDQUFDO2dCQWpCRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSw0SkFJVDt3QkFDRCw2SUFBNkk7d0JBQzdJLDZCQUE2Qjt3QkFDN0IsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztxQkFDNUIsQ0FBQzs7d0NBQUE7Z0JBT0YsMkJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVEQUlDLENBQUEiLCJmaWxlIjoicHJvcC1iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICBzZWxlY3RvcjogJ215LXByb3AtYmluZGluZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgICA8aDI+VGhpcyBpcyBhIGNoaWxkIENvbXBvbmVudDwvaDI+XG4gICAgICAgICAgICAgICA8aDI+SGVsbG8sIHt7bXlOYW1lfX0gYW5kIEkgYW0ge3tteUFnZX19PC9oMj5cbiAgICAgICAgICAgICAgIDxoMj57e2hpc05hbWV9fTwvaDI+XG4gIGAsXG4gIC8vIHdlIHVzZSAtICdpbnB1dHMnIHRvIGNoZWNrIHRoYXQgdGhpcyBpcyBleGFjdGx5ICdteU5hbWUnIGZyb20gdGhlIHBhcmVudCBjbGFzcyBzbyB3aGljaCB3ZSdsbCBjb252ZXkgdG8gcGFyZW50IENvbXBvbmVudCBieSBleHBvcnRpbmcgd2l0aFxuICAvLyBQcm9wQmluZGluZ0NvbXBvbmVudCBjbGFzc1xuICBpbnB1dHM6IFsnbXlOYW1lJywgJ215QWdlJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFByb3BCaW5kaW5nQ29tcG9uZW50IHtcbiAgIG15TmFtZSA9ICcnO1xuICAgaGlzTmFtZSA9IFwiSGlzIG5hbWUgR2VvcmdcIjtcbiAgIG15QWdlID0gXCIzNFwiXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Bill';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        // here we make all configuration of our component
                        selector: 'my-component',
                        // we put in span condition which use css class is-awesome  in case we answer 'yes'
                        template: "\n  <h1>this is my component!</h1>\n  Hi my name is {{name}}, this my first app ,<span [class.is-awesome]= \"inputElement.value=== 'yes' \"  [class.is-aweful]= \"inputElement.value=== 'no' \"    > I think it's very nice</span>\n     <br/><br/>\n     Am I rigth?\n     <input type=\"text\" #inputElement (keyup)=\"0\">",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUksTUFBTSxDQUFDO2dCQUNuQixDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1Qsa0RBQWtEO3dCQUNsRCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsbUZBQW1GO3dCQUNuRixRQUFRLEVBQUUsK1RBS3VDO3dCQUM5QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDMUMsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoibXktY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgYWxsb3cgdXMgdG8gdXNlIGNvbXBvbmVudCAgZGVjb3JhdG9yXG5pbXBvcnR7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICAvLyBoZXJlIHdlIG1ha2UgYWxsIGNvbmZpZ3VyYXRpb24gb2Ygb3VyIGNvbXBvbmVudFxuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXG4gIC8vIHdlIHB1dCBpbiBzcGFuIGNvbmRpdGlvbiB3aGljaCB1c2UgY3NzIGNsYXNzIGlzLWF3ZXNvbWUgIGluIGNhc2Ugd2UgYW5zd2VyICd5ZXMnXG4gIHRlbXBsYXRlOiBgXG4gIDxoMT50aGlzIGlzIG15IGNvbXBvbmVudCE8L2gxPlxuICBIaSBteSBuYW1lIGlzIHt7bmFtZX19LCB0aGlzIG15IGZpcnN0IGFwcCAsPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPSBcImlucHV0RWxlbWVudC52YWx1ZT09PSAneWVzJyBcIiAgW2NsYXNzLmlzLWF3ZWZ1bF09IFwiaW5wdXRFbGVtZW50LnZhbHVlPT09ICdubycgXCIgICAgPiBJIHRoaW5rIGl0J3MgdmVyeSBuaWNlPC9zcGFuPlxuICAgICA8YnIvPjxici8+XG4gICAgIEFtIEkgcmlndGg/XG4gICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5gLFxuICAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXVxufSlcbi8vIGknbSBnb2luZyB0byBleHBvcnQgdGhpcyBjbGFzcyBhbmQgdXNlIGl0IG91dHNpZGVcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCB7XG4gICAgbmFtZSAgPSAnQmlsbCc7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

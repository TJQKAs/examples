System.register(['angular2/core', "./bindings/input.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    // initialize two js objects
                    this.mySelf = { myName: ' ', myAge: ' ' };
                    this.confirmedMySelf = { myName: ' ', myAge: ' ' };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        //
                        selector: 'my-app',
                        template: "<div class=\"container\">\n                 <my-input (submitted)=\"onSubmit($event)\"></my-input>\n                  </div>\n                  <div class=\"container\">\n                ...\n                  </div>  ",
                        directives: [input_component_1.InputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0UsNEJBQTRCO29CQUMxQixXQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQztvQkFDbEMsb0JBQWUsR0FBRyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQXZCRTtvQkFBQyxnQkFBUyxDQUFFO3dCQUdmLEVBQUU7d0JBQ0EsUUFBUSxFQUFFLFFBQVE7d0JBQ25CLFFBQVEsRUFBRSw0TkFLZ0I7d0JBQ1QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFFN0MsQ0FBQzs7Z0NBQUE7Z0JBVUYsbUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVDQUlDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9ZnJvbSBcIi4vYmluZGluZ3MvaW5wdXQuY29tcG9uZW50XCI7XG5cbiAgIEBDb21wb25lbnQgKHtcblxuXG4vL1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkKT1cIm9uU3VibWl0KCRldmVudClcIj48L215LWlucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gIGAsXG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbSW5wdXRDb21wb25lbnRdXG5cbn0pXG5cbi8vPG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiPjwvbXktaW5wdXQ+IC0gY2F0Y2ggIHN1Ym1pc3Npb24gLCBydW4gZnVuY3Rpb24gb25TdWJtaXQgd2l0aCAkZXZlbnRcbi8vICRldmVudCAtIG1lYW5zIHRoYXQgSSBjYW4ndCBjaGFuZ2UgYW55IHZhbHVlcyB3aGljaCBwYXNzZWQgYnkgJGV2ZW50IHRocm91Z2ggbXkgb25TdWJtaXQgZnVuY3Rpb25cblxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIGluaXRpYWxpemUgdHdvIGpzIG9iamVjdHNcbiAgICBteVNlbGYgPSB7bXlOYW1lOicgJywgbXlBZ2U6ICcgJ307XG4gICAgY29uZmlybWVkTXlTZWxmID0ge215TmFtZTogJyAnLCBteUFnZTonICd9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

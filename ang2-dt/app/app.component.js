System.register(['angular2/core', "./bindings/input.component", "./bindings/confirm.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    // initialize two js objects
                    this.mySelf = { myName: ' ', myAge: ' ' };
                    this.confirmedMySelf = { myName: ' ', myAge: ' ' };
                }
                AppComponent.prototype.onSubmit = function (mySelf) {
                    //set mySelf object in parent component
                    this.mySelf = { myName: mySelf.myName, myAge: mySelf.myAge };
                };
                AppComponent.prototype.onConfirm = function (mySelf) {
                    this.confirmedMySelf = { myName: mySelf.myName, myAge: mySelf.myAge };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        //
                        selector: 'my-app',
                        template: "<div class=\"container\">\n                 <my-input (submitted)=\"onSubmit($event)\" [mySelf]=\"confirmedMySelf\"></my-input>\n                  </div>\n                  <div class=\"container\">\n                 <my-confirm (confirmed)=\"onConfirm($event)\" [mySelf]=\"mySelf\"></my-confirm>\n                  </div>  ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0UsNEJBQTRCO29CQUMxQixXQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQztvQkFDbEMsb0JBQWUsR0FBRyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxDQUFDO2dCQVMvQyxDQUFDO2dCQVBHLCtCQUFRLEdBQVIsVUFBUyxNQUFxQztvQkFDNUMsdUNBQXVDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFDRCxnQ0FBUyxHQUFULFVBQVUsTUFBd0M7b0JBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQTlCRjtvQkFBQyxnQkFBUyxDQUFFO3dCQUNmLEVBQUU7d0JBQ0EsUUFBUSxFQUFFLFFBQVE7d0JBQ25CLFFBQVEsRUFBRSxzVUFLZ0I7d0JBQ1QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsRUFBRSxvQ0FBZ0IsQ0FBQztxQkFFL0QsQ0FBQzs7Z0NBQUE7Z0JBb0JGLG1CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx1Q0FZQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fWZyb20gXCIuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fWZyb20gXCIuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50XCI7XG5cbiAgIEBDb21wb25lbnQgKHtcbi8vXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgPG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtteVNlbGZdPVwiY29uZmlybWVkTXlTZWxmXCI+PC9teS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICA8bXktY29uZmlybSAoY29uZmlybWVkKT1cIm9uQ29uZmlybSgkZXZlbnQpXCIgW215U2VsZl09XCJteVNlbGZcIj48L215LWNvbmZpcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gIGAsXG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbSW5wdXRDb21wb25lbnQsIENvbmZpcm1Db21wb25lbnRdXG5cbn0pXG5cbi8vPG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiPjwvbXktaW5wdXQ+IC0gY2F0Y2ggIHN1Ym1pc3Npb24gLCBydW4gZnVuY3Rpb24gb25TdWJtaXQgd2l0aCAkZXZlbnRcbi8vICRldmVudCAtIG1lYW5zIHRoYXQgSSBjYW4ndCBjaGFuZ2UgYW55IHZhbHVlcyB3aGljaCBwYXNzZWQgYnkgJGV2ZW50IHRocm91Z2ggbXkgb25TdWJtaXQgZnVuY3Rpb25cbi8vIFtteVNlbGZdPVwiY29uZmlybWVkTXlTZWxmXCIgIC0gd2UgYm91bmQgICdteVNlbGYnIHByb3AgLSAgZnJvbSBJbnB1dENvbXBvbmVudCB3aXRoIFwiY29uZmlybWVkTXlTZWxmIC1mcm9tIEFwcENvbXBvbmVudFxuLy8gW215U2VsZl09XCJteVNlbGZcIiAgLSB3ZSBib3VuZCB0d28gJ215U2VsZicgcHJvcCAtIDEgZnJvbSBDb25maXJtQ29tcG9uZW50IDItZnJvbSBBcHBDb21wb25lbnRcblxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIGluaXRpYWxpemUgdHdvIGpzIG9iamVjdHNcbiAgICBteVNlbGYgPSB7bXlOYW1lOicgJywgbXlBZ2U6ICcgJ307XG4gICAgY29uZmlybWVkTXlTZWxmID0ge215TmFtZTogJyAnLCBteUFnZTonICd9O1xuXG4gICAgb25TdWJtaXQobXlTZWxmOntteU5hbWU6c3RyaW5nLCBteUFnZTogc3RyaW5nfSl7XG4gICAgICAvL3NldCBteVNlbGYgb2JqZWN0IGluIHBhcmVudCBjb21wb25lbnRcbiAgICAgIHRoaXMubXlTZWxmID0ge215TmFtZTogbXlTZWxmLm15TmFtZSwgbXlBZ2U6IG15U2VsZi5teUFnZX07XG4gICAgfVxuICAgIG9uQ29uZmlybShteVNlbGY6IHtteU5hbWU6IHN0cmluZywgbXlBZ2U6IHN0cmluZyB9KXtcbiAgICAgIHRoaXMuY29uZmlybWVkTXlTZWxmID0ge215TmFtZTogbXlTZWxmLm15TmFtZSwgbXlBZ2U6IG15U2VsZi5teUFnZX07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

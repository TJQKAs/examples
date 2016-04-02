System.register(['angular2/core', './services/logging.service', './services/calculator.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                //use constuctor to bind injecting service with private variable
                function Component1Component(_loggingService, _calcService) {
                    this._loggingService = _loggingService;
                    this._calcService = _calcService;
                }
                // retrieve data from input form and put it through function
                // which tells us to pass var message through referal _loggingService which is referal to the service in our constructor
                // and service LoggingService just makes console.log - massage
                Component1Component.prototype.onLog = function (message) {
                    // show message from service
                    this._loggingService.log(message);
                };
                // take 2 numbers from input fields, convey them to export class where by constructor we created refernces to services with functions
                // click to ADD and we convey data to onAdd function which show the result which is equal to refernce to method add from service CalculatorService
                // which make operations with data and return something which is equal to result which we display jn <p>{{result}}</p>
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = this._calcService.add(+num1, +num2);
                };
                Component1Component.prototype.onMult = function (num1, num2) {
                    this.result = this._calcService.mult(+num1, +num2);
                };
                Component1Component.prototype.onSubs = function (num1, num2) {
                    this.result = this._calcService.subs(+num1, +num2);
                };
                Component1Component.prototype.onDiv = function (num1, num2) {
                    this.result = this._calcService.divide(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n   <div>\n    <h3>LoggingService</h3>\n    <input type=\"text\" #message>\n    <button (click)=\"onLog(message.value)\">Send</button>\n   </div>\n   <div><h3>Calculator </h3>\n   <p>Add or multiply numbers</p>\n   <input type=\"number\" #num1>\n   <input type=\"number\" #num2>\n  <button (click)=\"onAdd(num1.value, num2.value)\">ADD</button>\n  <button (click)=\"onMult(num1.value, num2.value)\">MULT</button>\n  <button (click)=\"onSubs(num1.value, num2.value)\">SUBSTRUCT</button>\n  <button (click)=\"onDiv(num1.value, num2.value)\">DIVIDE</button>\n  <br/>\n  <p>Result: {{result}}</p>\n\n\n   </div>\n  ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOEJBO2dCQUdFLGdFQUFnRTtnQkFDaEUsNkJBQW9CLGVBQStCLEVBQVUsWUFBK0I7b0JBQXhFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7Z0JBQUUsQ0FBQztnQkFDaEcsNERBQTREO2dCQUM1RCx3SEFBd0g7Z0JBQ3hILDhEQUE4RDtnQkFDM0QsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ25CLDRCQUE0QjtvQkFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0gscUlBQXFJO2dCQUN0SSxrSkFBa0o7Z0JBQ2xKLHNIQUFzSDtnQkFFbkgsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBQ0Qsb0NBQU0sR0FBTixVQUFPLElBQVksRUFBRSxJQUFZO29CQUMvQixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsb0NBQU0sR0FBTixVQUFPLElBQVksRUFBRSxJQUFZO29CQUMvQixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBdkRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxzbUJBbUJUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsc0NBQWlCLENBQUM7cUJBQy9DLENBQUM7O3VDQUFBO2dCQWtDRiwwQkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUEvQkQscURBK0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtMb2dnaW5nU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UnO1xuaW1wb3J0e0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBvbmVudC0xJyxcbiAgdGVtcGxhdGU6IGBcbiAgIDxkaXY+XG4gICAgPGgzPkxvZ2dpbmdTZXJ2aWNlPC9oMz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cbiAgIDwvZGl2PlxuICAgPGRpdj48aDM+Q2FsY3VsYXRvciA8L2gzPlxuICAgPHA+QWRkIG9yIG11bHRpcGx5IG51bWJlcnM8L3A+XG4gICA8aW5wdXQgdHlwZT1cIm51bWJlclwiICNudW0xPlxuICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiAjbnVtMj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BREQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0KG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+TVVMVDwvYnV0dG9uPlxuICA8YnV0dG9uIChjbGljayk9XCJvblN1YnMobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5TVUJTVFJVQ1Q8L2J1dHRvbj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwib25EaXYobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5ESVZJREU8L2J1dHRvbj5cbiAgPGJyLz5cbiAgPHA+UmVzdWx0OiB7e3Jlc3VsdH19PC9wPlxuXG5cbiAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZSwgQ2FsY3VsYXRvclNlcnZpY2VdXG59KVxuLy8gYnkgY2xpY2tpbmcgSSBwYXNzIG1lc3NhZ2UudmFsdWUgdGhyb3VnaCBmdW5jdGlvbiBvbkxvZyB3aGljaCBpcyBhIHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudHtcbiAgcmVzdWx0OiBzdHJpbmc7XG5cbiAgLy91c2UgY29uc3R1Y3RvciB0byBiaW5kIGluamVjdGluZyBzZXJ2aWNlIHdpdGggcHJpdmF0ZSB2YXJpYWJsZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGNTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSl7fVxuIC8vIHJldHJpZXZlIGRhdGEgZnJvbSBpbnB1dCBmb3JtIGFuZCBwdXQgaXQgdGhyb3VnaCBmdW5jdGlvblxuIC8vIHdoaWNoIHRlbGxzIHVzIHRvIHBhc3MgdmFyIG1lc3NhZ2UgdGhyb3VnaCByZWZlcmFsIF9sb2dnaW5nU2VydmljZSB3aGljaCBpcyByZWZlcmFsIHRvIHRoZSBzZXJ2aWNlIGluIG91ciBjb25zdHJ1Y3RvclxuIC8vIGFuZCBzZXJ2aWNlIExvZ2dpbmdTZXJ2aWNlIGp1c3QgbWFrZXMgY29uc29sZS5sb2cgLSBtYXNzYWdlXG4gICAgb25Mb2cobWVzc2FnZTogc3RyaW5nKXtcbiAgICAgIC8vIHNob3cgbWVzc2FnZSBmcm9tIHNlcnZpY2VcbiAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gIC8vIHRha2UgMiBudW1iZXJzIGZyb20gaW5wdXQgZmllbGRzLCBjb252ZXkgdGhlbSB0byBleHBvcnQgY2xhc3Mgd2hlcmUgYnkgY29uc3RydWN0b3Igd2UgY3JlYXRlZCByZWZlcm5jZXMgdG8gc2VydmljZXMgd2l0aCBmdW5jdGlvbnNcbiAvLyBjbGljayB0byBBREQgYW5kIHdlIGNvbnZleSBkYXRhIHRvIG9uQWRkIGZ1bmN0aW9uIHdoaWNoIHNob3cgdGhlIHJlc3VsdCB3aGljaCBpcyBlcXVhbCB0byByZWZlcm5jZSB0byBtZXRob2QgYWRkIGZyb20gc2VydmljZSBDYWxjdWxhdG9yU2VydmljZVxuIC8vIHdoaWNoIG1ha2Ugb3BlcmF0aW9ucyB3aXRoIGRhdGEgYW5kIHJldHVybiBzb21ldGhpbmcgd2hpY2ggaXMgZXF1YWwgdG8gcmVzdWx0IHdoaWNoIHdlIGRpc3BsYXkgam4gPHA+e3tyZXN1bHR9fTwvcD5cblxuICAgIG9uQWRkKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKXtcbiAgICAgIHRoaXMucmVzdWx0ID0gIHRoaXMuX2NhbGNTZXJ2aWNlLmFkZCgrIG51bTEsICsgbnVtMik7XG4gICAgfVxuICAgIG9uTXVsdChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcil7XG4gICAgICB0aGlzLnJlc3VsdCA9ICB0aGlzLl9jYWxjU2VydmljZS5tdWx0KCsgbnVtMSwgKyBudW0yKTtcbiAgICB9XG5cbiAgICBvblN1YnMobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgICAgdGhpcy5yZXN1bHQgPSAgdGhpcy5fY2FsY1NlcnZpY2Uuc3VicygrIG51bTEsICsgbnVtMik7XG4gICAgfVxuXG4gICAgb25EaXYobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgICAgdGhpcy5yZXN1bHQgPSAgdGhpcy5fY2FsY1NlcnZpY2UuZGl2aWRlKCsgbnVtMSwgKyBudW0yKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

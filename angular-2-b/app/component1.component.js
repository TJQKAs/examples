System.register(['angular2/core', './services/logging.service', './services/calculator.service', './services/data.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                //use constuctor to bind injecting service with private variable
                function Component1Component(_loggingService, _calcService, _dataServ) {
                    this._loggingService = _loggingService;
                    this._calcService = _calcService;
                    this._dataServ = _dataServ;
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
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataServ.getRandomString();
                };
                // var value type string we got meaning from tag #newData after that we got newData.value
                // by clicking button we called function onInsertElem with this value which is a string
                Component1Component.prototype.onInsertElem = function (value) {
                    // function called referal _dataServ of DataService which has a method insertElem
                    // which add this newData var to array
                    this._dataServ.insertElem(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n   <div>\n    <h3>LoggingService</h3>\n    <input type=\"text\" #message>\n    <button (click)=\"onLog(message.value)\">Send</button>\n   </div>\n   <div><h3>Calculator </h3>\n   <p>Add or multiply numbers</p>\n   <input type=\"number\" #num1>\n   <input type=\"number\" #num2>\n  <button (click)=\"onAdd(num1.value, num2.value)\">ADD</button>\n  <button (click)=\"onMult(num1.value, num2.value)\">MULT</button>\n  <button (click)=\"onSubs(num1.value, num2.value)\">SUBSTRUCT</button>\n  <button (click)=\"onDiv(num1.value, num2.value)\">DIVIDE</button>\n  <br/>\n  <p>Result: {{result}}</p>\n   </div>\n   <div>\n     <h3>Data Service</h3>\n     <button (click)=\"onGetData()\">Get Data</button>\n     <p>Current result: {{data}}</p>\n     <input type=\"text\" #newData>\n     <button (click)=\"onInsertElem(newData.value)\">Add word</button>\n   </div>\n  ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUlFLGdFQUFnRTtnQkFDaEUsNkJBQW9CLGVBQStCLEVBQVUsWUFBK0IsRUFBVSxTQUFzQjtvQkFBeEcsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO2dCQUFFLENBQUM7Z0JBQ2hJLDREQUE0RDtnQkFDNUQsd0hBQXdIO2dCQUN4SCw4REFBOEQ7Z0JBQzNELG1DQUFLLEdBQUwsVUFBTSxPQUFlO29CQUNuQiw0QkFBNEI7b0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNILHFJQUFxSTtnQkFDdEksa0pBQWtKO2dCQUNsSixzSEFBc0g7Z0JBRW5ILG1DQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsSUFBWTtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFFLElBQUksRUFBRSxDQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELG9DQUFNLEdBQU4sVUFBTyxJQUFZLEVBQUUsSUFBWTtvQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFFLElBQUksRUFBRSxDQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELG9DQUFNLEdBQU4sVUFBTyxJQUFZLEVBQUUsSUFBWTtvQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFFLElBQUksRUFBRSxDQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELG1DQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsSUFBWTtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFFLElBQUksRUFBRSxDQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVGLHVDQUFTLEdBQVQ7b0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELHlGQUF5RjtnQkFDekYsdUZBQXVGO2dCQUN0RiwwQ0FBWSxHQUFaLFVBQWEsS0FBYTtvQkFDeEIsaUZBQWlGO29CQUNqRixzQ0FBc0M7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQXpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsODFCQXdCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixFQUFFLDBCQUFXLENBQUM7cUJBQzVELENBQUM7O3VDQUFBO2dCQStDRiwwQkFBQztZQUFELENBNUNBLEFBNENDLElBQUE7WUE1Q0QscURBNENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtMb2dnaW5nU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UnO1xuaW1wb3J0e0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XG5pbXBvcnR7RGF0YVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICB0ZW1wbGF0ZTogYFxuICAgPGRpdj5cbiAgICA8aDM+TG9nZ2luZ1NlcnZpY2U8L2gzPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgPC9kaXY+XG4gICA8ZGl2PjxoMz5DYWxjdWxhdG9yIDwvaDM+XG4gICA8cD5BZGQgb3IgbXVsdGlwbHkgbnVtYmVyczwvcD5cbiAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgI251bTE+XG4gICA8aW5wdXQgdHlwZT1cIm51bWJlclwiICNudW0yPlxuICA8YnV0dG9uIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFERDwvYnV0dG9uPlxuICA8YnV0dG9uIChjbGljayk9XCJvbk11bHQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NVUxUPC9idXR0b24+XG4gIDxidXR0b24gKGNsaWNrKT1cIm9uU3VicyhudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPlNVQlNUUlVDVDwvYnV0dG9uPlxuICA8YnV0dG9uIChjbGljayk9XCJvbkRpdihudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkRJVklERTwvYnV0dG9uPlxuICA8YnIvPlxuICA8cD5SZXN1bHQ6IHt7cmVzdWx0fX08L3A+XG4gICA8L2Rpdj5cbiAgIDxkaXY+XG4gICAgIDxoMz5EYXRhIFNlcnZpY2U8L2gzPlxuICAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldERhdGEoKVwiPkdldCBEYXRhPC9idXR0b24+XG4gICAgIDxwPkN1cnJlbnQgcmVzdWx0OiB7e2RhdGF9fTwvcD5cbiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25ld0RhdGE+XG4gICAgIDxidXR0b24gKGNsaWNrKT1cIm9uSW5zZXJ0RWxlbShuZXdEYXRhLnZhbHVlKVwiPkFkZCB3b3JkPC9idXR0b24+XG4gICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlLCBEYXRhU2VydmljZV1cbn0pXG4vLyBieSBjbGlja2luZyBJIHBhc3MgbWVzc2FnZS52YWx1ZSB0aHJvdWdoIGZ1bmN0aW9uIG9uTG9nIHdoaWNoIGlzIGEgc3RyaW5nXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50e1xuICByZXN1bHQ6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xuXG4gIC8vdXNlIGNvbnN0dWN0b3IgdG8gYmluZCBpbmplY3Rpbmcgc2VydmljZSB3aXRoIHByaXZhdGUgdmFyaWFibGVcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsIHByaXZhdGUgX2RhdGFTZXJ2OiBEYXRhU2VydmljZSl7fVxuIC8vIHJldHJpZXZlIGRhdGEgZnJvbSBpbnB1dCBmb3JtIGFuZCBwdXQgaXQgdGhyb3VnaCBmdW5jdGlvblxuIC8vIHdoaWNoIHRlbGxzIHVzIHRvIHBhc3MgdmFyIG1lc3NhZ2UgdGhyb3VnaCByZWZlcmFsIF9sb2dnaW5nU2VydmljZSB3aGljaCBpcyByZWZlcmFsIHRvIHRoZSBzZXJ2aWNlIGluIG91ciBjb25zdHJ1Y3RvclxuIC8vIGFuZCBzZXJ2aWNlIExvZ2dpbmdTZXJ2aWNlIGp1c3QgbWFrZXMgY29uc29sZS5sb2cgLSBtYXNzYWdlXG4gICAgb25Mb2cobWVzc2FnZTogc3RyaW5nKXtcbiAgICAgIC8vIHNob3cgbWVzc2FnZSBmcm9tIHNlcnZpY2VcbiAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gIC8vIHRha2UgMiBudW1iZXJzIGZyb20gaW5wdXQgZmllbGRzLCBjb252ZXkgdGhlbSB0byBleHBvcnQgY2xhc3Mgd2hlcmUgYnkgY29uc3RydWN0b3Igd2UgY3JlYXRlZCByZWZlcm5jZXMgdG8gc2VydmljZXMgd2l0aCBmdW5jdGlvbnNcbiAvLyBjbGljayB0byBBREQgYW5kIHdlIGNvbnZleSBkYXRhIHRvIG9uQWRkIGZ1bmN0aW9uIHdoaWNoIHNob3cgdGhlIHJlc3VsdCB3aGljaCBpcyBlcXVhbCB0byByZWZlcm5jZSB0byBtZXRob2QgYWRkIGZyb20gc2VydmljZSBDYWxjdWxhdG9yU2VydmljZVxuIC8vIHdoaWNoIG1ha2Ugb3BlcmF0aW9ucyB3aXRoIGRhdGEgYW5kIHJldHVybiBzb21ldGhpbmcgd2hpY2ggaXMgZXF1YWwgdG8gcmVzdWx0IHdoaWNoIHdlIGRpc3BsYXkgam4gPHA+e3tyZXN1bHR9fTwvcD5cblxuICAgIG9uQWRkKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKXtcbiAgICAgIHRoaXMucmVzdWx0ID0gIHRoaXMuX2NhbGNTZXJ2aWNlLmFkZCgrIG51bTEsICsgbnVtMik7XG4gICAgfVxuICAgIG9uTXVsdChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcil7XG4gICAgICB0aGlzLnJlc3VsdCA9ICB0aGlzLl9jYWxjU2VydmljZS5tdWx0KCsgbnVtMSwgKyBudW0yKTtcbiAgICB9XG5cbiAgICBvblN1YnMobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgICAgdGhpcy5yZXN1bHQgPSAgdGhpcy5fY2FsY1NlcnZpY2Uuc3VicygrIG51bTEsICsgbnVtMik7XG4gICAgfVxuXG4gICAgb25EaXYobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgICAgdGhpcy5yZXN1bHQgPSAgdGhpcy5fY2FsY1NlcnZpY2UuZGl2aWRlKCsgbnVtMSwgKyBudW0yKTtcbiAgICB9XG5cbiAgIG9uR2V0RGF0YSgpe1xuICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhU2Vydi5nZXRSYW5kb21TdHJpbmcoKTtcbiAgIH1cblxuICAgLy8gdmFyIHZhbHVlIHR5cGUgc3RyaW5nIHdlIGdvdCBtZWFuaW5nIGZyb20gdGFnICNuZXdEYXRhIGFmdGVyIHRoYXQgd2UgZ290IG5ld0RhdGEudmFsdWVcbiAgIC8vIGJ5IGNsaWNraW5nIGJ1dHRvbiB3ZSBjYWxsZWQgZnVuY3Rpb24gb25JbnNlcnRFbGVtIHdpdGggdGhpcyB2YWx1ZSB3aGljaCBpcyBhIHN0cmluZ1xuICAgIG9uSW5zZXJ0RWxlbSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgIC8vIGZ1bmN0aW9uIGNhbGxlZCByZWZlcmFsIF9kYXRhU2VydiBvZiBEYXRhU2VydmljZSB3aGljaCBoYXMgYSBtZXRob2QgaW5zZXJ0RWxlbVxuICAgICAgLy8gd2hpY2ggYWRkIHRoaXMgbmV3RGF0YSB2YXIgdG8gYXJyYXlcbiAgICAgIHRoaXMuX2RhdGFTZXJ2Lmluc2VydEVsZW0odmFsdWUpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

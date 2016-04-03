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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['iron', 'steel', 'plumbum', 'oil', 'tin'];
                }
                //function which returns random string from array
                DataService.prototype.getRandomString = function () {
                    // Math.floor - use to cut a tail and get integer ; Math.random mult to _data.length to choose on elem from array
                    var rndNum = Math.floor(Math.random() * this._data.length);
                    // return elem with index rndNum from _data array
                    return this._data[rndNum];
                };
                // add function which allows to put smth to my _data array
                // var value type string
                DataService.prototype.insertElem = function (value) {
                    // just push value to _data array
                    this._data.push(value);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUNVLFVBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFlN0QsQ0FBQztnQkFiRSxpREFBaUQ7Z0JBQ2xELHFDQUFlLEdBQWY7b0JBQ0UsaUhBQWlIO29CQUNoSCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMzRCxpREFBaUQ7b0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUNELDBEQUEwRDtnQkFDMUQsd0JBQXdCO2dCQUN4QixnQ0FBVSxHQUFWLFVBQVcsS0FBYTtvQkFDdEIsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFqQkg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBa0JiLGtCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCxxQ0FnQkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7SW5qZWN0YWJsZX1mcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2V7XG4gIHByaXZhdGUgX2RhdGEgPSBbJ2lyb24nLCAnc3RlZWwnLCAncGx1bWJ1bScsICdvaWwnLCAndGluJ107XG5cbiAgIC8vZnVuY3Rpb24gd2hpY2ggcmV0dXJucyByYW5kb20gc3RyaW5nIGZyb20gYXJyYXlcbiAgZ2V0UmFuZG9tU3RyaW5nKCl7XG4gICAgLy8gTWF0aC5mbG9vciAtIHVzZSB0byBjdXQgYSB0YWlsIGFuZCBnZXQgaW50ZWdlciA7IE1hdGgucmFuZG9tIG11bHQgdG8gX2RhdGEubGVuZ3RoIHRvIGNob29zZSBvbiBlbGVtIGZyb20gYXJyYXlcbiAgICAgbGV0IHJuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2RhdGEubGVuZ3RoKTtcbiAgICAgLy8gcmV0dXJuIGVsZW0gd2l0aCBpbmRleCBybmROdW0gZnJvbSBfZGF0YSBhcnJheVxuICAgICByZXR1cm4gdGhpcy5fZGF0YVtybmROdW1dO1xuICB9XG4gIC8vIGFkZCBmdW5jdGlvbiB3aGljaCBhbGxvd3MgdG8gcHV0IHNtdGggdG8gbXkgX2RhdGEgYXJyYXlcbiAgLy8gdmFyIHZhbHVlIHR5cGUgc3RyaW5nXG4gIGluc2VydEVsZW0odmFsdWU6IHN0cmluZyl7XG4gICAgLy8ganVzdCBwdXNoIHZhbHVlIHRvIF9kYXRhIGFycmF5XG4gICAgdGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

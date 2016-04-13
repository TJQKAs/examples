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
    var ReversePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReversePipe = (function () {
                function ReversePipe() {
                }
                // value is what we gonna to change
                ReversePipe.prototype.transform = function (value, args) {
                    var length = value.length;
                    // our output
                    var resultString = '';
                    for (var i = 0; i < length; i++) {
                        // thus way each recent input will be at the beginning
                        resultString = value[i] + resultString;
                    }
                    return resultString;
                };
                ReversePipe = __decorate([
                    core_1.Pipe({
                        name: 'myReverse'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReversePipe);
                return ReversePipe;
            }());
            exports_1("ReversePipe", ReversePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmVyc2UtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQWFBLENBQUM7Z0JBWEQsbUNBQW1DO2dCQUNqQywrQkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLElBQVU7b0JBQ2pDLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQzVCLGFBQWE7b0JBQ2IsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN0QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUM5QixzREFBc0Q7d0JBQ3RELFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO29CQUN6QyxDQUFDO29CQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3RCLENBQUM7Z0JBaEJIO29CQUFDLFdBQUksQ0FBRTt3QkFDTCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQzs7K0JBQUE7Z0JBZUYsa0JBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHFDQWFDLENBQUEiLCJmaWxlIjoicmV2ZXJzZS1waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBQaXBlICh7XG4gIG5hbWU6ICdteVJldmVyc2UnXG59KVxuLy9QaXBlVHJhbnNmb3JtIGludGVyZmFjZSBhbmQgdHJhbnNmb3JtIG1ldGhvZCB3aXRoIDIgYXJnXG5leHBvcnQgIGNsYXNzIFJldmVyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbi8vIHZhbHVlIGlzIHdoYXQgd2UgZ29ubmEgdG8gY2hhbmdlXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOmFueVtdKXtcbiAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgLy8gb3VyIG91dHB1dFxuICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgLy8gdGh1cyB3YXkgZWFjaCByZWNlbnQgaW5wdXQgd2lsbCBiZSBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICByZXN1bHRTdHJpbmcgPSB2YWx1ZVtpXSArIHJlc3VsdFN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFN0cmluZztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

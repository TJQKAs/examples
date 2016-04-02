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
    var CalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalculatorService = (function () {
                function CalculatorService() {
                }
                CalculatorService.prototype.add = function (num1, num2) {
                    return num1 + num2;
                };
                CalculatorService.prototype.mult = function (num1, num2) {
                    return num1 * num2;
                };
                CalculatorService.prototype.subs = function (num1, num2) {
                    return num1 - num2;
                };
                CalculatorService.prototype.divide = function (num1, num2) {
                    return num1 / num2;
                };
                CalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalculatorService);
                return CalculatorService;
            }());
            exports_1("CalculatorService", CalculatorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQWNBLENBQUM7Z0JBWkMsK0JBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxJQUFZO29CQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFDRCxnQ0FBSSxHQUFKLFVBQUssSUFBWSxFQUFFLElBQVk7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUNELGdDQUFJLEdBQUosVUFBSyxJQUFZLEVBQUUsSUFBWTtvQkFDN0IsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0Esa0NBQU0sR0FBTixVQUFPLElBQVksRUFBRSxJQUFZO29CQUNoQyxNQUFNLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztnQkFDdEIsQ0FBQztnQkFmSDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkFnQmIsd0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELGlEQWNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e0luamVjdGFibGV9ZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNle1xuXG4gIGFkZChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcil7XG4gICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICB9XG4gIG11bHQobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgfVxuICBzdWJzKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKXtcbiAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gIH1cbiAgIGRpdmlkZShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcil7XG4gICAgcmV0dXJuIG51bTEgLyAgbnVtMjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

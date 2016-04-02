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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // service should be injectable into components
            LoggingService = (function () {
                function LoggingService() {
                }
                // service displays string in console
                LoggingService.prototype.log = function (message) {
                    message = message + ' ' + message;
                    console.log(message);
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            }());
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLCtDQUErQztZQUkvQztnQkFBQTtnQkFNQSxDQUFDO2dCQUxDLHFDQUFxQztnQkFDckMsNEJBQUcsR0FBSCxVQUFJLE9BQWU7b0JBQ2pCLE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztvQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFSSDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFTYixxQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsMkNBTUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbi8vIHNlcnZpY2Ugc2hvdWxkIGJlIGluamVjdGFibGUgaW50byBjb21wb25lbnRzXG5ASW5qZWN0YWJsZSgpXG5cblxuZXhwb3J0IGNsYXNzIExvZ2dpbmdTZXJ2aWNle1xuICAvLyBzZXJ2aWNlIGRpc3BsYXlzIHN0cmluZyBpbiBjb25zb2xlXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgJyAnICsgbWVzc2FnZTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

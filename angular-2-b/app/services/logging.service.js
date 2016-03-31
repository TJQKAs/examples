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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLCtDQUErQztZQUkvQztnQkFBQTtnQkFLQSxDQUFDO2dCQUpDLHFDQUFxQztnQkFDckMsNEJBQUcsR0FBSCxVQUFJLE9BQWU7b0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBUEg7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBUWIscUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDJDQUtDLENBQUEiLCJmaWxlIjoic2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vLyBzZXJ2aWNlIHNob3VsZCBiZSBpbmplY3RhYmxlIGludG8gY29tcG9uZW50c1xuQEluamVjdGFibGUoKVxuXG5cbmV4cG9ydCBjbGFzcyBMb2dnaW5nU2VydmljZXtcbiAgLy8gc2VydmljZSBkaXNwbGF5cyBzdHJpbmcgaW4gY29uc29sZVxuICBsb2cobWVzc2FnZTogc3RyaW5nKXtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

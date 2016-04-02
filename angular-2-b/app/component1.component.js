System.register(['angular2/core', './services/logging.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                //use constuctor to bind injecting service with private variable
                function Component1Component(_loggingService) {
                    this._loggingService = _loggingService;
                }
                // retrieve data from input form and put it through function
                // which tells us to pass var message through referal _loggingService which is referal to the service in our constructor
                // and service LoggingService just makes console.log - massage
                Component1Component.prototype.onLog = function (message) {
                    // show message from service
                    this._loggingService.log(message);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n     <input type=\"text\" #message>\n     <button (click)=\"onLog(message.value)\">Send</button>\n  ",
                        providers: [logging_service_1.LoggingService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0UsZ0VBQWdFO2dCQUNoRSw2QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtnQkFBRSxDQUFDO2dCQUN2RCw0REFBNEQ7Z0JBQzVELHdIQUF3SDtnQkFDeEgsOERBQThEO2dCQUMzRCxtQ0FBSyxHQUFMLFVBQU0sT0FBZTtvQkFDbkIsNEJBQTRCO29CQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdHQUdUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzVCLENBQUM7O3VDQUFBO2dCQWFGLDBCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxxREFVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnR7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICB0ZW1wbGF0ZTogYFxuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XG4gIGAsXG4gIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlXVxufSlcbi8vIGJ5IGNsaWNraW5nIEkgcGFzcyBtZXNzYWdlLnZhbHVlIHRocm91Z2ggZnVuY3Rpb24gb25Mb2cgd2hpY2ggaXMgYSBzdHJpbmdcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnR7XG4gIC8vdXNlIGNvbnN0dWN0b3IgdG8gYmluZCBpbmplY3Rpbmcgc2VydmljZSB3aXRoIHByaXZhdGUgdmFyaWFibGVcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlKXt9XG4gLy8gcmV0cmlldmUgZGF0YSBmcm9tIGlucHV0IGZvcm0gYW5kIHB1dCBpdCB0aHJvdWdoIGZ1bmN0aW9uXG4gLy8gd2hpY2ggdGVsbHMgdXMgdG8gcGFzcyB2YXIgbWVzc2FnZSB0aHJvdWdoIHJlZmVyYWwgX2xvZ2dpbmdTZXJ2aWNlIHdoaWNoIGlzIHJlZmVyYWwgdG8gdGhlIHNlcnZpY2UgaW4gb3VyIGNvbnN0cnVjdG9yXG4gLy8gYW5kIHNlcnZpY2UgTG9nZ2luZ1NlcnZpY2UganVzdCBtYWtlcyBjb25zb2xlLmxvZyAtIG1hc3NhZ2VcbiAgICBvbkxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgICAgLy8gc2hvdyBtZXNzYWdlIGZyb20gc2VydmljZVxuICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

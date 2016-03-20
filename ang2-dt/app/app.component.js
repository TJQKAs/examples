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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "John Connor";
                }
                AppComponent.prototype.onTest = function () {
                    var getname = "Hi I m glad";
                    return getname;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // data bindng by curly braces 
                        template: "<h1 class=\"{{'hyper'}}\">{{onTest()}}</h1>\n     <input type=\"text\" value=\"{{name}}\" class=\"{{'hyper'}}\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDRyxTQUFJLEdBQUcsYUFBYSxDQUFDO2dCQU14QixDQUFDO2dCQUxJLDZCQUFNLEdBQU47b0JBRUUsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDO29CQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNsQixDQUFDO2dCQWpCRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUdiLFFBQVEsRUFBRSxRQUFRO3dCQUNsQiwrQkFBK0I7d0JBQ2hDLFFBQVEsRUFBRSxzSEFFUjtxQkFFRixDQUFDOztnQ0FBQTtnQkFTRixtQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdUNBT0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4gICBAQ29tcG9uZW50ICh7XG5cblxuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIC8vIGRhdGEgYmluZG5nIGJ5IGN1cmx5IGJyYWNlcyBcbiB0ZW1wbGF0ZTogYDxoMSBjbGFzcz1cInt7J2h5cGVyJ319XCI+e3tvblRlc3QoKX19PC9oMT5cbiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ7e25hbWV9fVwiIGNsYXNzPVwie3snaHlwZXInfX1cIj5cbiAgYFxuXG59KVxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICBuYW1lID0gXCJKb2huIENvbm5vclwiO1xuICAgICBvblRlc3QoKXtcblxuICAgICAgIHZhciBnZXRuYW1lID0gXCJIaSBJIG0gZ2xhZFwiO1xuICAgICAgcmV0dXJuIGdldG5hbWU7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

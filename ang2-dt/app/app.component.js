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
                    this.values = "";
                }
                AppComponent.prototype.onTest = function () {
                    var getname = "Hi I m glad";
                    return getname;
                };
                AppComponent.prototype.onKeyup = function (value) {
                    this.values += value + ' | ';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // data bindng by curly braces
                        // [value]="name" - prop binding first case; everything with prefix ng - is directive [ngClass]="{hyper: true};
                        //(keyup)="onKeyup() - whenever we listen events and catch them by (keyup)  we want fire func onKeyup();
                        // set the var inputElem and put value of this var  in func , so we can make oprations with him
                        template: "<h1 class=\"{{'hyper'}}\">{{onTest()}}</h1>\n <br/>\n     <input type=\"text\" [value]=\"name\"  [ngClass]=\"{hyper: true}\"  (keyup)=\"onKeyup(inputElem.value)\" #inputElem>\n    <p>{{values}}<br/></p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0csU0FBSSxHQUFHLGFBQWEsQ0FBQztvQkFDckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztnQkFTZixDQUFDO2dCQVJJLDZCQUFNLEdBQU47b0JBQ0UsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDO29CQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNsQixDQUFDO2dCQUVDLDhCQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNsQixJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUU7Z0JBQ2pDLENBQUM7Z0JBMUJIO29CQUFDLGdCQUFTLENBQUU7d0JBR2IsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLDhCQUE4Qjt3QkFDOUIsK0dBQStHO3dCQUMvRyx3R0FBd0c7d0JBQ3hHLCtGQUErRjt3QkFDaEcsUUFBUSxFQUFFLGdOQUlSO3FCQUVGLENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbiAgIEBDb21wb25lbnQgKHtcblxuXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgLy8gZGF0YSBiaW5kbmcgYnkgY3VybHkgYnJhY2VzXG4gIC8vIFt2YWx1ZV09XCJuYW1lXCIgLSBwcm9wIGJpbmRpbmcgZmlyc3QgY2FzZTsgZXZlcnl0aGluZyB3aXRoIHByZWZpeCBuZyAtIGlzIGRpcmVjdGl2ZSBbbmdDbGFzc109XCJ7aHlwZXI6IHRydWV9O1xuICAvLyhrZXl1cCk9XCJvbktleXVwKCkgLSB3aGVuZXZlciB3ZSBsaXN0ZW4gZXZlbnRzIGFuZCBjYXRjaCB0aGVtIGJ5IChrZXl1cCkgIHdlIHdhbnQgZmlyZSBmdW5jIG9uS2V5dXAoKTtcbiAgLy8gc2V0IHRoZSB2YXIgaW5wdXRFbGVtIGFuZCBwdXQgdmFsdWUgb2YgdGhpcyB2YXIgIGluIGZ1bmMgLCBzbyB3ZSBjYW4gbWFrZSBvcHJhdGlvbnMgd2l0aCBoaW1cbiB0ZW1wbGF0ZTogYDxoMSBjbGFzcz1cInt7J2h5cGVyJ319XCI+e3tvblRlc3QoKX19PC9oMT5cbiA8YnIvPlxuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibmFtZVwiICBbbmdDbGFzc109XCJ7aHlwZXI6IHRydWV9XCIgIChrZXl1cCk9XCJvbktleXVwKGlucHV0RWxlbS52YWx1ZSlcIiAjaW5wdXRFbGVtPlxuICAgIDxwPnt7dmFsdWVzfX08YnIvPjwvcD5cbiAgYFxuXG59KVxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICBuYW1lID0gXCJKb2huIENvbm5vclwiO1xuICAgdmFsdWVzID0gXCJcIjtcbiAgICAgb25UZXN0KCl7XG4gICAgICAgdmFyIGdldG5hbWUgPSBcIkhpIEkgbSBnbGFkXCI7XG4gICAgICByZXR1cm4gZ2V0bmFtZTtcbiAgIH1cblxuICAgICBvbktleXVwKHZhbHVlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnZhbHVlcyArPSB2YWx1ZSArICcgfCAnIDtcbiAgICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

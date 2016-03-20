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
                        //   <input type="text" [(ngModel)]="name"> two way data binding - which handle input and output data from the same var
                        template: "<h1 class=\"{{'hyper'}}\">{{onTest()}}</h1>\n <br/>\n     <input type=\"text\" [value]=\"name\"  [ngClass]=\"{hyper: true}\"  (keyup)=\"onKeyup(inputElem.value)\" #inputElem>\n    <p>{{values}}<br/></p>\n    <br/><br/><br/>\n    <input type=\"text\" [(ngModel)]=\"name\">\n    <p>Your name : {{name}}</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0csU0FBSSxHQUFHLGFBQWEsQ0FBQztvQkFDckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztnQkFTZixDQUFDO2dCQVJJLDZCQUFNLEdBQU47b0JBQ0UsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDO29CQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNsQixDQUFDO2dCQUVDLDhCQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNsQixJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUU7Z0JBQ2pDLENBQUM7Z0JBL0JIO29CQUFDLGdCQUFTLENBQUU7d0JBR2IsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLDhCQUE4Qjt3QkFDOUIsK0dBQStHO3dCQUMvRyx3R0FBd0c7d0JBQ3hHLCtGQUErRjt3QkFFL0YsdUhBQXVIO3dCQUN4SCxRQUFRLEVBQUUsc1RBT1I7cUJBRUYsQ0FBQzs7Z0NBQUE7Z0JBYUYsbUJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVDQVdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuICAgQENvbXBvbmVudCAoe1xuXG5cbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAvLyBkYXRhIGJpbmRuZyBieSBjdXJseSBicmFjZXNcbiAgLy8gW3ZhbHVlXT1cIm5hbWVcIiAtIHByb3AgYmluZGluZyBmaXJzdCBjYXNlOyBldmVyeXRoaW5nIHdpdGggcHJlZml4IG5nIC0gaXMgZGlyZWN0aXZlIFtuZ0NsYXNzXT1cIntoeXBlcjogdHJ1ZX07XG4gIC8vKGtleXVwKT1cIm9uS2V5dXAoKSAtIHdoZW5ldmVyIHdlIGxpc3RlbiBldmVudHMgYW5kIGNhdGNoIHRoZW0gYnkgKGtleXVwKSAgd2Ugd2FudCBmaXJlIGZ1bmMgb25LZXl1cCgpO1xuICAvLyBzZXQgdGhlIHZhciBpbnB1dEVsZW0gYW5kIHB1dCB2YWx1ZSBvZiB0aGlzIHZhciAgaW4gZnVuYyAsIHNvIHdlIGNhbiBtYWtlIG9wcmF0aW9ucyB3aXRoIGhpbVxuXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuYW1lXCI+IHR3byB3YXkgZGF0YSBiaW5kaW5nIC0gd2hpY2ggaGFuZGxlIGlucHV0IGFuZCBvdXRwdXQgZGF0YSBmcm9tIHRoZSBzYW1lIHZhclxuIHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwie3snaHlwZXInfX1cIj57e29uVGVzdCgpfX08L2gxPlxuIDxici8+XG4gICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJuYW1lXCIgIFtuZ0NsYXNzXT1cIntoeXBlcjogdHJ1ZX1cIiAgKGtleXVwKT1cIm9uS2V5dXAoaW5wdXRFbGVtLnZhbHVlKVwiICNpbnB1dEVsZW0+XG4gICAgPHA+e3t2YWx1ZXN9fTxici8+PC9wPlxuICAgIDxici8+PGJyLz48YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgIDxwPllvdXIgbmFtZSA6IHt7bmFtZX19PC9wPlxuICBgXG5cbn0pXG4vLyB0aGlzIG91ciBkZWZhdWx0IGNsYXNzXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgIG5hbWUgPSBcIkpvaG4gQ29ubm9yXCI7XG4gICB2YWx1ZXMgPSBcIlwiO1xuICAgICBvblRlc3QoKXtcbiAgICAgICB2YXIgZ2V0bmFtZSA9IFwiSGkgSSBtIGdsYWRcIjtcbiAgICAgIHJldHVybiBnZXRuYW1lO1xuICAgfVxuXG4gICAgIG9uS2V5dXAodmFsdWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudmFsdWVzICs9IHZhbHVlICsgJyB8ICcgO1xuICAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

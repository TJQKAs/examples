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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.mySelf = { myName: '', myAge: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
                    if (this.mySelf.myName != ' ' && this.mySelf.myAge != ' ') {
                        // check whether ours forms are filled
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    ///   / ^\d+$/.test(expression) - we check whether expression contains only digits by regex filter
                    if (this.mySelf.myName != ' ' && /^\d+$/.test(this.mySelf.myAge)) {
                        // check whether ours forms are filled
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.mySelf);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "<h2>Are your submitted details correct? </h2>\n  <p>Your name is <span>{{mySelf.myName}}</span>and You are <span>{{mySelf.myAge}}</span> old.\n  Please click on 'Confirm' button to assert your details</p>\n  <div>\n    <label for=\"myName\">Your name</label><br/>\n    <input type=\"text\" id=\"myName\" [(ngModel)]=\"mySelf.myName\" (keyup)=\"onKeyup()\">\n  </div>\n  <div>\n    <label for=\"myAge\">Your age</label><br/>\n    <input type=\"text\" id=\"myAge\" [(ngModel)]=\"mySelf.myAge\" (keyup)=\"onKeyup()\">\n  </div>\n  <br/>\n  <div>Filled out:{{isFilled  ? 'Yes' : 'No'}}</div>\n  <div>Valid : {{isValid ? 'Yes' : 'No'}}</div>\n  <br/>\n  <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO29CQUVJLFdBQU0sR0FBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFtQyxDQUFDO2dCQXVCcEUsQ0FBQztnQkFyQkcsa0NBQU8sR0FBUDtvQkFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRyxHQUFHLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUcsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFFckQsc0NBQXNDO3dCQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsQ0FBQztvQkFDQSxrR0FBa0c7b0JBQ25HLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFHLEdBQUcsSUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUU3RCxzQ0FBc0M7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO2dCQUNILENBQUM7Z0JBQ0Qsb0NBQVMsR0FBVDtvQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBL0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxzdEJBZ0JUO3FCQUNGLENBQUM7O29DQUFBO2dCQThCRix1QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsK0NBNEJDLENBQUEiLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfWZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb25maXJtJyxcbiAgdGVtcGxhdGU6IGA8aDI+QXJlIHlvdXIgc3VibWl0dGVkIGRldGFpbHMgY29ycmVjdD8gPC9oMj5cbiAgPHA+WW91ciBuYW1lIGlzIDxzcGFuPnt7bXlTZWxmLm15TmFtZX19PC9zcGFuPmFuZCBZb3UgYXJlIDxzcGFuPnt7bXlTZWxmLm15QWdlfX08L3NwYW4+IG9sZC5cbiAgUGxlYXNlIGNsaWNrIG9uICdDb25maXJtJyBidXR0b24gdG8gYXNzZXJ0IHlvdXIgZGV0YWlsczwvcD5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwibXlOYW1lXCI+WW91ciBuYW1lPC9sYWJlbD48YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibXlOYW1lXCIgWyhuZ01vZGVsKV09XCJteVNlbGYubXlOYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwibXlBZ2VcIj5Zb3VyIGFnZTwvbGFiZWw+PGJyLz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm15QWdlXCIgWyhuZ01vZGVsKV09XCJteVNlbGYubXlBZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gIDwvZGl2PlxuICA8YnIvPlxuICA8ZGl2PkZpbGxlZCBvdXQ6e3tpc0ZpbGxlZCAgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICA8ZGl2PlZhbGlkIDoge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgPGJyLz5cbiAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWlzVmFsaWRcIiAoY2xpY2spPVwib25Db25maXJtKClcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50e1xuXG4gICAgbXlTZWxmID0ge215TmFtZTogJycsIG15QWdlOiAnJ307XG4gICAgaXNGaWxsZWQgPSBmYWxzZTtcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bXlOYW1lOiBzdHJpbmcsIG15QWdlOiBzdHJpbmd9PigpO1xuXG4gICAgb25LZXl1cCgpe1xuICAgICAgaWYodGhpcy5teVNlbGYubXlOYW1lIT0gJyAnJiYgdGhpcy5teVNlbGYubXlBZ2UhPSAnICcpe1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VycyBmb3JtcyBhcmUgZmlsbGVkXG4gICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgIC8vLyAgIC8gXlxcZCskLy50ZXN0KGV4cHJlc3Npb24pIC0gd2UgY2hlY2sgd2hldGhlciBleHByZXNzaW9uIGNvbnRhaW5zIG9ubHkgZGlnaXRzIGJ5IHJlZ2V4IGZpbHRlclxuICAgICAgaWYodGhpcy5teVNlbGYubXlOYW1lIT0gJyAnJiYgL15cXGQrJC8udGVzdCh0aGlzLm15U2VsZi5teUFnZSkpe1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VycyBmb3JtcyBhcmUgZmlsbGVkXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25Db25maXJtKCl7XG4gICAgICB0aGlzLmNvbmZpcm1lZC5lbWl0KHRoaXMubXlTZWxmKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

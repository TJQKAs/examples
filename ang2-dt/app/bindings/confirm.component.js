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
            // import {InputComponent} from './bindings/input.component';
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
                        template: "<h4>Did you enter correct data about yourself? </h4>\n  <p>Your name is  <span>{{mySelf.myName}}</span>  and You are  <span>{{mySelf.myAge}}</span>  old.\n  Please click on 'Confirm' button to assert your details</p>\n  <div>\n    <label for=\"myName\">Your name</label><br/>\n    <input type=\"text\" id=\"myName\" [(ngModel)]=\"mySelf.myName\" (keyup)=\"onKeyup()\">\n  </div>\n  <div>\n    <label for=\"myAge\">Your age</label><br/>\n    <input type=\"text\" id=\"myAge\" [(ngModel)]=\"mySelf.myAge\" (keyup)=\"onKeyup()\">\n  </div>\n  <br/>\n  <div>Filled out:{{isFilled  ? 'Yes' : 'No'}}</div>\n  <div>Valid : {{isValid ? 'Yes' : 'No'}}</div>\n  <br/>\n  <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">I confirm</button>\n  ",
                        inputs: ['mySelf'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQ0EsNkRBQTZEO1lBeUI3RDtnQkFBQTtvQkFFSSxXQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDakMsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBbUMsQ0FBQztnQkF1QnBFLENBQUM7Z0JBckJHLGtDQUFPLEdBQVA7b0JBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUcsR0FBRyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBRXJELHNDQUFzQzt3QkFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLENBQUM7b0JBQ0Esa0dBQWtHO29CQUNuRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRyxHQUFHLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFFN0Qsc0NBQXNDO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDdEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELG9DQUFTLEdBQVQ7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQWpETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUscXVCQWdCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2pCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDeEIsQ0FBQzs7b0NBQUE7Z0JBOEJGLHVCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCwrQ0E0QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9ZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vLyBpbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWNvbmZpcm0nLFxuICB0ZW1wbGF0ZTogYDxoND5EaWQgeW91IGVudGVyIGNvcnJlY3QgZGF0YSBhYm91dCB5b3Vyc2VsZj8gPC9oND5cbiAgPHA+WW91ciBuYW1lIGlzICA8c3Bhbj57e215U2VsZi5teU5hbWV9fTwvc3Bhbj4gIGFuZCBZb3UgYXJlICA8c3Bhbj57e215U2VsZi5teUFnZX19PC9zcGFuPiAgb2xkLlxuICBQbGVhc2UgY2xpY2sgb24gJ0NvbmZpcm0nIGJ1dHRvbiB0byBhc3NlcnQgeW91ciBkZXRhaWxzPC9wPlxuICA8ZGl2PlxuICAgIDxsYWJlbCBmb3I9XCJteU5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPjxici8+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJteU5hbWVcIiBbKG5nTW9kZWwpXT1cIm15U2VsZi5teU5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxsYWJlbCBmb3I9XCJteUFnZVwiPllvdXIgYWdlPC9sYWJlbD48YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibXlBZ2VcIiBbKG5nTW9kZWwpXT1cIm15U2VsZi5teUFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgPC9kaXY+XG4gIDxici8+XG4gIDxkaXY+RmlsbGVkIG91dDp7e2lzRmlsbGVkICA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gIDxkaXY+VmFsaWQgOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICA8YnIvPlxuICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPkkgY29uZmlybTwvYnV0dG9uPlxuICBgLFxuICBpbnB1dHM6IFsnbXlTZWxmJ10sXG4gICBvdXRwdXRzOiBbJ2NvbmZpcm1lZCddXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudHtcblxuICAgIG15U2VsZiA9IHtteU5hbWU6ICcnLCBteUFnZTogJyd9O1xuICAgIGlzRmlsbGVkID0gZmFsc2U7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGNvbmZpcm1lZCA9IG5ldyBFdmVudEVtaXR0ZXI8e215TmFtZTogc3RyaW5nLCBteUFnZTogc3RyaW5nfT4oKTtcblxuICAgIG9uS2V5dXAoKXtcbiAgICAgIGlmKHRoaXMubXlTZWxmLm15TmFtZSE9ICcgJyYmIHRoaXMubXlTZWxmLm15QWdlIT0gJyAnKXtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91cnMgZm9ybXMgYXJlIGZpbGxlZFxuICAgICAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgICAvLy8gICAvIF5cXGQrJC8udGVzdChleHByZXNzaW9uKSAtIHdlIGNoZWNrIHdoZXRoZXIgZXhwcmVzc2lvbiBjb250YWlucyBvbmx5IGRpZ2l0cyBieSByZWdleCBmaWx0ZXJcbiAgICAgIGlmKHRoaXMubXlTZWxmLm15TmFtZSE9ICcgJyYmIC9eXFxkKyQvLnRlc3QodGhpcy5teVNlbGYubXlBZ2UpKXtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91cnMgZm9ybXMgYXJlIGZpbGxlZFxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIG9uQ29uZmlybSgpe1xuICAgICAgdGhpcy5jb25maXJtZWQuZW1pdCh0aGlzLm15U2VsZik7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

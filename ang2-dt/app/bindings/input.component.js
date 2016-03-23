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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.mySelf = { myName: '', myAge: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    // by EventEmitter we fire event
                    this.submitted = new core_1.EventEmitter();
                }
                // our checking empty function 'onKeyup()' below
                InputComponent.prototype.onKeyup = function () {
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
                /// we create a function and attach  it upward to button 'Submit' so by clicking we encourage this function
                InputComponent.prototype.onSubmit = function () {
                    //pass through emit object mySelf
                    this.submitted.emit(this.mySelf);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        //   <input type="text" id="myName" [(ngModel)]="mySelf.myName" (keyup)="onKeyup()"> - 2w databinding
                        // by (keyup)="onKeyup()" - start process
                        //
                        template: "\n  <h2>Please type details about you</h2>\n  <div>\n    <label for=\"myName\">Your name</label><br/>\n    <input type=\"text\" id=\"myName\" [(ngModel)]=\"mySelf.myName\" (keyup)=\"onKeyup()\">\n  </div>\n  <div>\n    <label for=\"myAge\">Your age</label><br/>\n    <input type=\"text\" id=\"myAge\" [(ngModel)]=\"mySelf.myAge\" (keyup)=\"onKeyup()\">\n  </div>\n  <br/>\n  <div>Filled out:{{isFilled  ? 'Yes' : 'No'}}</div>\n  <div>Valid : {{isValid ? 'Yes' : 'No'}}</div>\n  <br/>\n  <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n  ",
                        // add outputs 
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQTtnQkFBQTtvQkFDQSxXQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsZ0NBQWdDO29CQUNoQyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFtQyxDQUFDO2dCQTRCaEUsQ0FBQztnQkExQkQsZ0RBQWdEO2dCQUNoRCxnQ0FBTyxHQUFQO29CQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFHLEdBQUcsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUVyRCxzQ0FBc0M7d0JBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN4QixDQUFDO29CQUNBLGtHQUFrRztvQkFDbkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUcsR0FBRyxJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBRTdELHNDQUFzQzt3QkFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFQSwyR0FBMkc7Z0JBQ3pHLGlDQUFRLEdBQVI7b0JBQ0UsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBdkRKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLHFHQUFxRzt3QkFDckcseUNBQXlDO3dCQUN6QyxFQUFFO3dCQUNGLFFBQVEsRUFBRSxtakJBZVQ7d0JBQ0QsZUFBZTt3QkFDZixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7cUJBQ3ZCLENBQUM7O2tDQUFBO2dCQW1DRixxQkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QsMkNBaUNDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICAnbXktaW5wdXQnLFxuICAvLyAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibXlOYW1lXCIgWyhuZ01vZGVsKV09XCJteVNlbGYubXlOYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPiAtIDJ3IGRhdGFiaW5kaW5nXG4gIC8vIGJ5IChrZXl1cCk9XCJvbktleXVwKClcIiAtIHN0YXJ0IHByb2Nlc3NcbiAgLy9cbiAgdGVtcGxhdGU6IGBcbiAgPGgyPlBsZWFzZSB0eXBlIGRldGFpbHMgYWJvdXQgeW91PC9oMj5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwibXlOYW1lXCI+WW91ciBuYW1lPC9sYWJlbD48YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibXlOYW1lXCIgWyhuZ01vZGVsKV09XCJteVNlbGYubXlOYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwibXlBZ2VcIj5Zb3VyIGFnZTwvbGFiZWw+PGJyLz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm15QWdlXCIgWyhuZ01vZGVsKV09XCJteVNlbGYubXlBZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gIDwvZGl2PlxuICA8YnIvPlxuICA8ZGl2PkZpbGxlZCBvdXQ6e3tpc0ZpbGxlZCAgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICA8ZGl2PlZhbGlkIDoge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgPGJyLz5cbiAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWlzVmFsaWRcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPlN1Ym1pdDwvYnV0dG9uPlxuICBgLFxuICAvLyBhZGQgb3V0cHV0cyBcbiAgb3V0cHV0czogWydzdWJtaXR0ZWQnXVxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbm15U2VsZiA9IHtteU5hbWU6JycsIG15QWdlOiAnJ307XG5pc0ZpbGxlZCA9IGZhbHNlO1xuaXNWYWxpZCA9IGZhbHNlO1xuLy8gYnkgRXZlbnRFbWl0dGVyIHdlIGZpcmUgZXZlbnRcbnN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e215TmFtZTogc3RyaW5nLCBteUFnZTogc3RyaW5nfT4oKTtcblxuLy8gb3VyIGNoZWNraW5nIGVtcHR5IGZ1bmN0aW9uICdvbktleXVwKCknIGJlbG93XG5vbktleXVwKCl7XG4gIGlmKHRoaXMubXlTZWxmLm15TmFtZSE9ICcgJyYmIHRoaXMubXlTZWxmLm15QWdlIT0gJyAnKXtcblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VycyBmb3JtcyBhcmUgZmlsbGVkXG4gICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICB9XG4gICAvLy8gICAvIF5cXGQrJC8udGVzdChleHByZXNzaW9uKSAtIHdlIGNoZWNrIHdoZXRoZXIgZXhwcmVzc2lvbiBjb250YWlucyBvbmx5IGRpZ2l0cyBieSByZWdleCBmaWx0ZXJcbiAgaWYodGhpcy5teVNlbGYubXlOYW1lIT0gJyAnJiYgL15cXGQrJC8udGVzdCh0aGlzLm15U2VsZi5teUFnZSkpe1xuXG4gICAgLy8gY2hlY2sgd2hldGhlciBvdXJzIGZvcm1zIGFyZSBmaWxsZWRcbiAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICB9XG59XG5cbiAvLy8gd2UgY3JlYXRlIGEgZnVuY3Rpb24gYW5kIGF0dGFjaCAgaXQgdXB3YXJkIHRvIGJ1dHRvbiAnU3VibWl0JyBzbyBieSBjbGlja2luZyB3ZSBlbmNvdXJhZ2UgdGhpcyBmdW5jdGlvblxuICAgb25TdWJtaXQoKXtcbiAgICAgLy9wYXNzIHRocm91Z2ggZW1pdCBvYmplY3QgbXlTZWxmXG4gICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5teVNlbGYpO1xuICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

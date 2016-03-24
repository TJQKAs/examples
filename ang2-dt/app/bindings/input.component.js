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
                    this.mySelf = { myName: ' ', myAge: ' ' };
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
                        template: "\n  <h4>Please type below the details about you</h4>\n  <div>\n    <label for=\"myName\">Your name</label><br/>\n    <input type=\"text\" id=\"myName\" [(ngModel)]=\"mySelf.myName\" (keyup)=\"onKeyup()\">\n  </div>\n  <div>\n    <label for=\"myAge\">Your age</label><br/>\n    <input type=\"text\" id=\"myAge\" [(ngModel)]=\"mySelf.myAge\" (keyup)=\"onKeyup()\">\n  </div>\n  <br/>\n  <div>Filled out:{{isFilled  ? 'Yes' : 'No'}}</div>\n  <div>Valid : {{isValid ? 'Yes' : 'No'}}</div>\n  <br/>\n  <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n  ",
                        inputs: ['mySelf'],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFBQTtvQkFDQSxXQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQztvQkFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsZ0NBQWdDO29CQUNoQyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFtQyxDQUFDO2dCQTRCaEUsQ0FBQztnQkExQkQsZ0RBQWdEO2dCQUNoRCxnQ0FBTyxHQUFQO29CQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFHLEdBQUcsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUVyRCxzQ0FBc0M7d0JBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN4QixDQUFDO29CQUNBLGtHQUFrRztvQkFDbkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUcsR0FBRyxJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBRTdELHNDQUFzQzt3QkFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFQSwyR0FBMkc7Z0JBQ3pHLGlDQUFRLEdBQVI7b0JBQ0UsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBeERKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLHFHQUFxRzt3QkFDckcseUNBQXlDO3dCQUN6QyxFQUFFO3dCQUNGLFFBQVEsRUFBRSw2akJBZVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNsQixjQUFjO3dCQUNkLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDdkIsQ0FBQzs7a0NBQUE7Z0JBbUNGLHFCQUFDO1lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtZQWpDRCwyQ0FpQ0MsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAgJ215LWlucHV0JyxcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm15TmFtZVwiIFsobmdNb2RlbCldPVwibXlTZWxmLm15TmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj4gLSAydyBkYXRhYmluZGluZ1xuICAvLyBieSAoa2V5dXApPVwib25LZXl1cCgpXCIgLSBzdGFydCBwcm9jZXNzXG4gIC8vXG4gIHRlbXBsYXRlOiBgXG4gIDxoND5QbGVhc2UgdHlwZSBiZWxvdyB0aGUgZGV0YWlscyBhYm91dCB5b3U8L2g0PlxuICA8ZGl2PlxuICAgIDxsYWJlbCBmb3I9XCJteU5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPjxici8+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJteU5hbWVcIiBbKG5nTW9kZWwpXT1cIm15U2VsZi5teU5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxsYWJlbCBmb3I9XCJteUFnZVwiPllvdXIgYWdlPC9sYWJlbD48YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibXlBZ2VcIiBbKG5nTW9kZWwpXT1cIm15U2VsZi5teUFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgPC9kaXY+XG4gIDxici8+XG4gIDxkaXY+RmlsbGVkIG91dDp7e2lzRmlsbGVkICA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gIDxkaXY+VmFsaWQgOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICA8YnIvPlxuICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG4gIGAsXG4gIGlucHV0czogWydteVNlbGYnXSxcbiAgLy8gYWRkIG91dHB1dHNcbiAgb3V0cHV0czogWydzdWJtaXR0ZWQnXVxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbm15U2VsZiA9IHtteU5hbWU6JyAnLCBteUFnZTogJyAnfTtcbmlzRmlsbGVkID0gZmFsc2U7XG5pc1ZhbGlkID0gZmFsc2U7XG4vLyBieSBFdmVudEVtaXR0ZXIgd2UgZmlyZSBldmVudFxuc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bXlOYW1lOiBzdHJpbmcsIG15QWdlOiBzdHJpbmd9PigpO1xuXG4vLyBvdXIgY2hlY2tpbmcgZW1wdHkgZnVuY3Rpb24gJ29uS2V5dXAoKScgYmVsb3dcbm9uS2V5dXAoKXtcbiAgaWYodGhpcy5teVNlbGYubXlOYW1lIT0gJyAnJiYgdGhpcy5teVNlbGYubXlBZ2UhPSAnICcpe1xuXG4gICAgLy8gY2hlY2sgd2hldGhlciBvdXJzIGZvcm1zIGFyZSBmaWxsZWRcbiAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gIH1cbiAgIC8vLyAgIC8gXlxcZCskLy50ZXN0KGV4cHJlc3Npb24pIC0gd2UgY2hlY2sgd2hldGhlciBleHByZXNzaW9uIGNvbnRhaW5zIG9ubHkgZGlnaXRzIGJ5IHJlZ2V4IGZpbHRlclxuICBpZih0aGlzLm15U2VsZi5teU5hbWUhPSAnICcmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlTZWxmLm15QWdlKSl7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIG91cnMgZm9ybXMgYXJlIGZpbGxlZFxuICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gIH1cbn1cblxuIC8vLyB3ZSBjcmVhdGUgYSBmdW5jdGlvbiBhbmQgYXR0YWNoICBpdCB1cHdhcmQgdG8gYnV0dG9uICdTdWJtaXQnIHNvIGJ5IGNsaWNraW5nIHdlIGVuY291cmFnZSB0aGlzIGZ1bmN0aW9uXG4gICBvblN1Ym1pdCgpe1xuICAgICAvL3Bhc3MgdGhyb3VnaCBlbWl0IG9iamVjdCBteVNlbGZcbiAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15U2VsZik7XG4gICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

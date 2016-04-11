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
                    this.today = new Date();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<section class=\"pipe\">\n      <h2>The date pipe</h2>\n      <p>Today is : {{today}}  without pipe </p>\n      <p>Today is : {{today | date : 'short'}}  with date pipe and argument short </p>\n      <p>Today is : {{today | date : 'longDate'}}  with date pipe and argument longDate </p>\n            <p>Today is : {{today | date : 'yMMMd'}}  with date pipe and argument yMMMd </p>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>The lowercase  and uppercase pipe</h2>\n      <input type=\"text\" #inputCasePipe (keyup)=\"0\"><br/>\n      <div>Output lowercase: XX</div>\n            <div>Output uppercase: XX</div>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Slice pipe</h2>\n      <input type=\"text\" #inputSlicePipe (keyup)=\"0\" (keyup)=\"0\"> - from <input type=\"text\"  #start (keyup)=\"0\" >\n to <input type=\"text #end\" (keyup)=\"0\" >\n      <div>Output: XX</div>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Number Pipes</h2>\n      <input type=\"text\" #inputNumberPipes (keyup)=\"0\"> - currency <input type=\"text\" #currency  value=\"USD\" (change)=\"0\"><br/>\n      <div>Output decimal: XX</div>\n            <div>Output currency: XX</div>\n              <input type=\"checkbox\" #currencyShort (change)=\"0\">Short currency code\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Chaining multiple pipes</h2>\n      <input type=\"text\" #inputChainPipes (keyup)=\"0\"><br/>\n      <div>Output: XX</div>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Async (stateful) pipes</h2>\n      <div>Output (obtained after 2s): XX</div>\n    </section>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpREE7Z0JBQUE7b0JBQ0csVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBaEREO29CQUFDLGdCQUFTLENBQUM7d0JBRVAsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw4bERBd0NUO3FCQUVKLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgIDxoMj5UaGUgZGF0ZSBwaXBlPC9oMj5cbiAgICAgIDxwPlRvZGF5IGlzIDoge3t0b2RheX19ICB3aXRob3V0IHBpcGUgPC9wPlxuICAgICAgPHA+VG9kYXkgaXMgOiB7e3RvZGF5IHwgZGF0ZSA6ICdzaG9ydCd9fSAgd2l0aCBkYXRlIHBpcGUgYW5kIGFyZ3VtZW50IHNob3J0IDwvcD5cbiAgICAgIDxwPlRvZGF5IGlzIDoge3t0b2RheSB8IGRhdGUgOiAnbG9uZ0RhdGUnfX0gIHdpdGggZGF0ZSBwaXBlIGFuZCBhcmd1bWVudCBsb25nRGF0ZSA8L3A+XG4gICAgICAgICAgICA8cD5Ub2RheSBpcyA6IHt7dG9kYXkgfCBkYXRlIDogJ3lNTU1kJ319ICB3aXRoIGRhdGUgcGlwZSBhbmQgYXJndW1lbnQgeU1NTWQgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgPGgyPlRoZSBsb3dlcmNhc2UgIGFuZCB1cHBlcmNhc2UgcGlwZTwvaDI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRDYXNlUGlwZSAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICA8ZGl2Pk91dHB1dCBsb3dlcmNhc2U6IFhYPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pk91dHB1dCB1cHBlcmNhc2U6IFhYPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICA8aDI+U2xpY2UgcGlwZTwvaDI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRTbGljZVBpcGUgKGtleXVwKT1cIjBcIiAoa2V5dXApPVwiMFwiPiAtIGZyb20gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICNzdGFydCAoa2V5dXApPVwiMFwiID5cbiB0byA8aW5wdXQgdHlwZT1cInRleHQgI2VuZFwiIChrZXl1cCk9XCIwXCIgPlxuICAgICAgPGRpdj5PdXRwdXQ6IFhYPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICA8aDI+TnVtYmVyIFBpcGVzPC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dE51bWJlclBpcGVzIChrZXl1cCk9XCIwXCI+IC0gY3VycmVuY3kgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2N1cnJlbmN5ICB2YWx1ZT1cIlVTRFwiIChjaGFuZ2UpPVwiMFwiPjxici8+XG4gICAgICA8ZGl2Pk91dHB1dCBkZWNpbWFsOiBYWDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQgY3VycmVuY3k6IFhYPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAjY3VycmVuY3lTaG9ydCAoY2hhbmdlKT1cIjBcIj5TaG9ydCBjdXJyZW5jeSBjb2RlXG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICA8aDI+Q2hhaW5pbmcgbXVsdGlwbGUgcGlwZXM8L2gyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2hhaW5QaXBlcyAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICA8ZGl2Pk91dHB1dDogWFg8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgIDxoMj5Bc3luYyAoc3RhdGVmdWwpIHBpcGVzPC9oMj5cbiAgICAgIDxkaXY+T3V0cHV0IChvYnRhaW5lZCBhZnRlciAycyk6IFhYPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGAsXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICB7XG4gICB0b2RheSA9IG5ldyBEYXRlKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

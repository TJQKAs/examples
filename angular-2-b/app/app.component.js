System.register(['angular2/core', './reverse-pipe'], function(exports_1, context_1) {
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
    var core_1, reverse_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reverse_pipe_1_1) {
                reverse_pipe_1 = reverse_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.today = new Date();
                    this.stateFullPromise = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve('Data is here!'); }, 5000);
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<section class=\"pipe\">\n      <h2>The date pipe</h2>\n      <p>Today is : {{today}}  without pipe </p>\n      <p>Today is : {{today | date : 'short'}}  with date pipe and argument short </p>\n      <p>Today is : {{today | date : 'longDate'}}  with date pipe and argument longDate </p>\n            <p>Today is : {{today | date : 'yMMMd'}}  with date pipe and argument yMMMd </p>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>The lowercase  and uppercase pipe</h2>\n      <input type=\"text\" #inputCasePipe (keyup)=\"0\"><br/>\n      <div>Output lowercase: {{inputCasePipe.value | lowercase}}</div>\n            <div>Output uppercase: {{inputCasePipe.value | uppercase}}</div>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Slice pipe</h2>\n      <input type=\"text\" #inputSlicePipe (keyup)=\"0\" (keyup)=\"0\"> - from <input type=\"text\"  #start (keyup)=\"0\" >\n to <input type=\"text\"  #end (keyup)=\"0\" >\n      <div>Output: {{inputSlicePipe.value | slice:start.value:end.value}}</div>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Number Pipes</h2>\n      <input type=\"text\" #inputNumberPipes (keyup)=\"0\"> - currency <input type=\"text\" #currency  value=\"USD\" (change)=\"0\"><br/>\n      <div>Output decimal: {{1.0 * inputNumberPipes.value | number: '1.1-5' }}</div>\n            <div>Output currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked}}</div>\n              <input type=\"checkbox\" #currencyShort (change)=\"0\">Short currency code\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Chaining multiple pipes lowercase and slice</h2>\n      <input type=\"text\" #inputChainPipes (keyup)=\"0\"><br/>\n      <div>Output: {{inputChainPipes.value | lowercase | slice: 2-5 }}</div>\n    </section>\n\n    <section class=\"pipe\">\n      <h2>Custom reverse pipe</h2>\n      <input type=\"text\" #inputReversePipes (keyup)=\"0\"><br/>\n      <div>Output: {{inputReversePipes.value | myReverse}}</div>\n    </section>\n\n\n\n    <section class=\"pipe\">\n      <h2>Async (stateful) pipes</h2>\n      <div>Output (obtained after 5s): {{stateFullPromise | async}}</div>\n    </section>\n    ",
                        pipes: [reverse_pipe_1.ReversePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyREE7Z0JBQUE7b0JBQ0csVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBRW5CLHFCQUFnQixHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQzdDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUF4QixDQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNuRCxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQTdERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUVQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsZ3BFQWdEVDt3QkFDRCxLQUFLLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUV2QixDQUFDOztnQ0FBQTtnQkFPRixtQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdUNBTUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZXZlcnNlUGlwZX0gZnJvbSAnLi9yZXZlcnNlLXBpcGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICA8aDI+VGhlIGRhdGUgcGlwZTwvaDI+XG4gICAgICA8cD5Ub2RheSBpcyA6IHt7dG9kYXl9fSAgd2l0aG91dCBwaXBlIDwvcD5cbiAgICAgIDxwPlRvZGF5IGlzIDoge3t0b2RheSB8IGRhdGUgOiAnc2hvcnQnfX0gIHdpdGggZGF0ZSBwaXBlIGFuZCBhcmd1bWVudCBzaG9ydCA8L3A+XG4gICAgICA8cD5Ub2RheSBpcyA6IHt7dG9kYXkgfCBkYXRlIDogJ2xvbmdEYXRlJ319ICB3aXRoIGRhdGUgcGlwZSBhbmQgYXJndW1lbnQgbG9uZ0RhdGUgPC9wPlxuICAgICAgICAgICAgPHA+VG9kYXkgaXMgOiB7e3RvZGF5IHwgZGF0ZSA6ICd5TU1NZCd9fSAgd2l0aCBkYXRlIHBpcGUgYW5kIGFyZ3VtZW50IHlNTU1kIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgIDxoMj5UaGUgbG93ZXJjYXNlICBhbmQgdXBwZXJjYXNlIHBpcGU8L2gyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2FzZVBpcGUgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgPGRpdj5PdXRwdXQgbG93ZXJjYXNlOiB7e2lucHV0Q2FzZVBpcGUudmFsdWUgfCBsb3dlcmNhc2V9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQgdXBwZXJjYXNlOiB7e2lucHV0Q2FzZVBpcGUudmFsdWUgfCB1cHBlcmNhc2V9fTwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgPGgyPlNsaWNlIHBpcGU8L2gyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0U2xpY2VQaXBlIChrZXl1cCk9XCIwXCIgKGtleXVwKT1cIjBcIj4gLSBmcm9tIDxpbnB1dCB0eXBlPVwidGV4dFwiICAjc3RhcnQgKGtleXVwKT1cIjBcIiA+XG4gdG8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICNlbmQgKGtleXVwKT1cIjBcIiA+XG4gICAgICA8ZGl2Pk91dHB1dDoge3tpbnB1dFNsaWNlUGlwZS52YWx1ZSB8IHNsaWNlOnN0YXJ0LnZhbHVlOmVuZC52YWx1ZX19PC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICA8aDI+TnVtYmVyIFBpcGVzPC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dE51bWJlclBpcGVzIChrZXl1cCk9XCIwXCI+IC0gY3VycmVuY3kgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2N1cnJlbmN5ICB2YWx1ZT1cIlVTRFwiIChjaGFuZ2UpPVwiMFwiPjxici8+XG4gICAgICA8ZGl2Pk91dHB1dCBkZWNpbWFsOiB7ezEuMCAqIGlucHV0TnVtYmVyUGlwZXMudmFsdWUgfCBudW1iZXI6ICcxLjEtNScgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+T3V0cHV0IGN1cnJlbmN5OiB7ezEuMCAqIGlucHV0TnVtYmVyUGlwZXMudmFsdWUgfCBjdXJyZW5jeTpjdXJyZW5jeS52YWx1ZTpjdXJyZW5jeVNob3J0LmNoZWNrZWR9fTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgI2N1cnJlbmN5U2hvcnQgKGNoYW5nZSk9XCIwXCI+U2hvcnQgY3VycmVuY3kgY29kZVxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgPGgyPkNoYWluaW5nIG11bHRpcGxlIHBpcGVzIGxvd2VyY2FzZSBhbmQgc2xpY2U8L2gyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2hhaW5QaXBlcyAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICA8ZGl2Pk91dHB1dDoge3tpbnB1dENoYWluUGlwZXMudmFsdWUgfCBsb3dlcmNhc2UgfCBzbGljZTogMi01IH19PC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICA8aDI+Q3VzdG9tIHJldmVyc2UgcGlwZTwvaDI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRSZXZlcnNlUGlwZXMgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgPGRpdj5PdXRwdXQ6IHt7aW5wdXRSZXZlcnNlUGlwZXMudmFsdWUgfCBteVJldmVyc2V9fTwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgIDxoMj5Bc3luYyAoc3RhdGVmdWwpIHBpcGVzPC9oMj5cbiAgICAgIDxkaXY+T3V0cHV0IChvYnRhaW5lZCBhZnRlciA1cyk6IHt7c3RhdGVGdWxsUHJvbWlzZSB8IGFzeW5jfX08L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBwaXBlczogW1JldmVyc2VQaXBlXVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAge1xuICAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICBzdGF0ZUZ1bGxQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJ0RhdGEgaXMgaGVyZSEnKSwgNTAwMCk7XG4gICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

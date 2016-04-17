System.register(['angular2/platform/browser', "./app.component", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // import {enableProdMode} from 'angular2/core';
            // enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLGdEQUFnRDtZQUNoRCxvQkFBb0I7WUFDcEIsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMseUJBQWdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY29tcG9uZW50IGZyb20gLSBwYXRoXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuLy8gaW1wb3J0IHtlbmFibGVQcm9kTW9kZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vLyBlbmFibGVQcm9kTW9kZSgpO1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1JPVVRFUl9QUk9WSURFUlNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

System.register(['angular2/core', './http.service'], function(exports_1, context_1) {
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
    var core_1, http_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                }
                AppComponent.prototype.onGetPosts = function () {
                    var _this = this;
                    this._httpService.getPosts()
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log("error"); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div>\n    <div class=\"input\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\" id=\"title\" #title>\n    </div>\n    <div class=\"input\">\n      <label for=\"body\">Body</label>\n      <input type=\"text\" id=\"body\" #body>\n    </div>\n    <div class=\"input\">\n      <label for=\"user-id\">User id</label>\n      <input type=\"text\" id=\"user-id\" #userId>\n    </div>\n    <button (click)=\"onPost(title.value, body.value, userId.value)\">Post Data</button>\n    <button (click)=\"onGetPosts()\">Get all Posts</button>\n    <p>Response:{{response | json }}</p>\n    </div>\n    ",
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBSUcsc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUVoRCxpQ0FBVSxHQUFWO29CQUFBLGlCQU1DO29CQUxFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMzQixTQUFTLENBQ1IsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsRUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQixDQUM5QixDQUFBO2dCQUNKLENBQUM7Z0JBckNKO29CQUFDLGdCQUFTLENBQUM7d0JBRVAsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx5bUJBa0JUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O2dDQUFBO2dCQWVGLG1CQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCx1Q0FhQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAjdGl0bGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiYm9keVwiPkJvZHk8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJib2R5XCIgI2JvZHk+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICA8bGFiZWwgZm9yPVwidXNlci1pZFwiPlVzZXIgaWQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLWlkXCIgI3VzZXJJZD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvblBvc3QodGl0bGUudmFsdWUsIGJvZHkudmFsdWUsIHVzZXJJZC52YWx1ZSlcIj5Qb3N0IERhdGE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldFBvc3RzKClcIj5HZXQgYWxsIFBvc3RzPC9idXR0b24+XG4gICAgPHA+UmVzcG9uc2U6e3tyZXNwb25zZSB8IGpzb24gfX08L3A+XG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIHtcbiAgLy8gZGVmaW5lIHByb3BlcnR5IHdoZXJlIHdlIHNhdmUgdGhlIHJlcXVlc3RcbiAgIHJlc3BvbnNlOiBzdHJpbmc7XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSl7fVxuXG4gICBvbkdldFBvc3RzKCl7XG4gICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQb3N0cygpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UsXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiZXJyb3JcIilcbiAgICAgIClcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

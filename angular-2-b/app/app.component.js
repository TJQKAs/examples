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
                AppComponent.prototype.onPost = function (title, body, userId) {
                    var _this = this;
                    this._httpService.createPost({ title: title, body: body, userId: +userId })
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBSUcsc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUVoRCxpQ0FBVSxHQUFWO29CQUFBLGlCQU1DO29CQUxFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMzQixTQUFTLENBQ1IsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsRUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQixDQUM5QixDQUFBO2dCQUNKLENBQUM7Z0JBRUQsNkJBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBYztvQkFBbEQsaUJBTUM7b0JBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUM7eUJBQ3hFLFNBQVMsQ0FDUixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUM7Z0JBQ0osQ0FBQztnQkE3Q0o7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHltQkFrQlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7Z0NBQUE7Z0JBdUJGLG1CQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCx1Q0FxQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgI3RpdGxlPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgPGxhYmVsIGZvcj1cImJvZHlcIj5Cb2R5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYm9keVwiICNib2R5PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgPGxhYmVsIGZvcj1cInVzZXItaWRcIj5Vc2VyIGlkPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1pZFwiICN1c2VySWQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25Qb3N0KHRpdGxlLnZhbHVlLCBib2R5LnZhbHVlLCB1c2VySWQudmFsdWUpXCI+UG9zdCBEYXRhPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXRQb3N0cygpXCI+R2V0IGFsbCBQb3N0czwvYnV0dG9uPlxuICAgIDxwPlJlc3BvbnNlOnt7cmVzcG9uc2UgfCBqc29uIH19PC9wPlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICB7XG4gIC8vIGRlZmluZSBwcm9wZXJ0eSB3aGVyZSB3ZSBzYXZlIHRoZSByZXF1ZXN0XG4gICByZXNwb25zZTogc3RyaW5nO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2Upe31cblxuICAgb25HZXRQb3N0cygpe1xuICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UG9zdHMoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhcImVycm9yXCIpXG4gICAgICApXG4gICB9XG5cbiAgIG9uUG9zdCh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKXtcbiAgICAgdGhpcy5faHR0cFNlcnZpY2UuY3JlYXRlUG9zdCh7dGl0bGU6IHRpdGxlLCBib2R5OiBib2R5LCB1c2VySWQ6ICt1c2VySWR9KVxuICAgICAuc3Vic2NyaWJlKFxuICAgICAgIHJlc3BvbnNlID0+IHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSxcbiAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgKTtcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

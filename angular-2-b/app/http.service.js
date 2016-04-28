System.register(['angular2/core', "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(_http) {
                    this._http = _http;
                }
                HttpService.prototype.getPosts = function () {
                    return this._http.get('http://jsonplaceholder.typicode.com/posts')
                        .map(function (res) { return res.json(); });
                };
                HttpService.prototype.createPost = function (post) {
                    var body = JSON.stringify(post);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-urlencoded');
                    return this._http.post('http://jsonplaceholder.typicode.com/posts', body, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFDRSxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFFLENBQUM7Z0JBRWxDLDhCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO3lCQUUvRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQW1EO29CQUM1RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO29CQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxFQUFDO3dCQUNyRSxPQUFPLEVBQUUsT0FBTztxQkFDbkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFqQkg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBa0JiLGtCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCxxQ0FpQkMsQ0FBQSIsImZpbGUiOiJodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7SW5qZWN0YWJsZX1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtIdHRwLCBIZWFkZXJzfWZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnR7T2JzZXJ2YWJsZX1mcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuICBnZXRQb3N0cygpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXG4gICAgLy9leHRyYWN0IHJlc3BvbnNlXG4gICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSk7XG4gIH1cblxuICBjcmVhdGVQb3N0KHBvc3Q6IHt0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyfSk6IE9ic2VydmFibGU8YW55PntcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctdXJsZW5jb2RlZCcpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywgYm9keSx7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

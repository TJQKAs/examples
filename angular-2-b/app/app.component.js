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
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // find tag in html with the name my-app and execute the code below in
                        selector: 'my-app',
                        // by template we specify action here is just string, but we can set a link or extra document
                        //for exampleby templateUrl - http:// ....
                        //
                        template: "\n       <section class=\"setup\">\n       <h2>Game Setup</h2>\n               Enter your name dude:\n             <input type=\"text\">\n       </section>\n       <section>\n         <h2>The Puzzle!</h2>\n         <p>Welcome to the game<span class=\"name\">XXX</span></p>\n         <br/>\n         Switch 1:\n         <input type=\"text\"><br/>\n         Switch 2:\n         <input type=\"text\"><br/>\n         Switch 3:\n         <input type=\"text\"><br/>\n         Switch 4:\n         <input type=\"text\"><br/>\n       </section>\n       <h2>Congrats XXX!  you did it</h2>\n\n\n\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFyQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxzRUFBc0U7d0JBQ3BFLFFBQVEsRUFBRSxRQUFRO3dCQUNsQiw2RkFBNkY7d0JBQzdGLDBDQUEwQzt3QkFDMUMsRUFBRTt3QkFDRixRQUFRLEVBQUUsa2xCQXdCVDtxQkFHSixDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZmluZCB0YWcgaW4gaHRtbCB3aXRoIHRoZSBuYW1lIG15LWFwcCBhbmQgZXhlY3V0ZSB0aGUgY29kZSBiZWxvdyBpblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICAvLyBieSB0ZW1wbGF0ZSB3ZSBzcGVjaWZ5IGFjdGlvbiBoZXJlIGlzIGp1c3Qgc3RyaW5nLCBidXQgd2UgY2FuIHNldCBhIGxpbmsgb3IgZXh0cmEgZG9jdW1lbnRcbiAgICAvL2ZvciBleGFtcGxlYnkgdGVtcGxhdGVVcmwgLSBodHRwOi8vIC4uLi5cbiAgICAvL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBkdWRlOlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgIDxoMj5UaGUgUHV6emxlITwvaDI+XG4gICAgICAgICA8cD5XZWxjb21lIHRvIHRoZSBnYW1lPHNwYW4gY2xhc3M9XCJuYW1lXCI+WFhYPC9zcGFuPjwvcD5cbiAgICAgICAgIDxici8+XG4gICAgICAgICBTd2l0Y2ggMTpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjxici8+XG4gICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjxici8+XG4gICAgICAgICBTd2l0Y2ggMzpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjxici8+XG4gICAgICAgICBTd2l0Y2ggNDpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjxici8+XG4gICAgICAgPC9zZWN0aW9uPlxuICAgICAgIDxoMj5Db25ncmF0cyBYWFghICB5b3UgZGlkIGl0PC9oMj5cblxuXG5cblxuICAgIGAsXG5cblxufSlcbi8vIHRoaXMgb3VyIGRlZmF1bHQgY2xhc3NcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

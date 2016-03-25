System.register(['angular2/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "\n  <div myHighLight>\n    Highlight me\n  </div> <br/><br/>\n  <div myHighLight>\n    Do it again\n  </div> <br/><br/>\n  ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLHlCQUF5Qjt3QkFDbkMsUUFBUSxFQUFFLDZIQU9UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHdDQUFrQixDQUFDO3FCQUNqQyxDQUFDOzt1Q0FBQTtnQkFJRiwwQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscURBRUMsQ0FBQSIsImZpbGUiOiJhdHRyaWJ1dGUtZGlyZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXR0cmlidXRlLWRpcmVjdGl2ZXMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IG15SGlnaExpZ2h0PlxuICAgIEhpZ2hsaWdodCBtZVxuICA8L2Rpdj4gPGJyLz48YnIvPlxuICA8ZGl2IG15SGlnaExpZ2h0PlxuICAgIERvIGl0IGFnYWluXG4gIDwvZGl2PiA8YnIvPjxici8+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtIaWdobGlnaHREaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlc3tcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

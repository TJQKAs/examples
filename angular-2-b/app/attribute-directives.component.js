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
                        template: "\n  <div myHighlight>\n    Highlight me\n  </div>\n   <br/><br/>\n  <div myHighlight>\n    Do it again\n  </div>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWhCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFFBQVEsRUFBRSxzSEFRVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFDakMsQ0FBQzs7dUNBQUE7Z0JBSUYsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gJy4vaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWF0dHJpYnV0ZS1kaXJlY3RpdmVzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBteUhpZ2hsaWdodD5cbiAgICBIaWdobGlnaHQgbWVcbiAgPC9kaXY+XG4gICA8YnIvPjxici8+XG4gIDxkaXYgbXlIaWdobGlnaHQ+XG4gICAgRG8gaXQgYWdhaW5cbiAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtIaWdobGlnaHREaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlc3tcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

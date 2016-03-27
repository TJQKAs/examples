System.register(['angular2/core', './attribute-directives.component', './structural-directive.component'], function(exports_1, context_1) {
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
    var core_1, attribute_directives_component_1, structural_directive_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (structural_directive_component_1_1) {
                structural_directive_component_1 = structural_directive_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<my-attribute-directives></my-attribute-directives>\n    <br/><br/>\n    <h1>My Structural Directives</h1>\n    <my-structural-directives></my-structural-directives>",
                        directives: [attribute_directives_component_1.AttributeDirectives, structural_directive_component_1.StructuralDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtnQkFDQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBRVAsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1S0FHNEM7d0JBQ3RELFVBQVUsRUFBRSxDQUFDLG9EQUFtQixFQUFFLHFEQUFvQixDQUFDO3FCQUcxRCxDQUFDOztnQ0FBQTtnQkFFRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVzfSBmcm9tICcuL2F0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudCc7XG5pbXBvcnR7U3RydWN0dXJhbERpcmVjdGl2ZXN9IGZyb20gJy4vc3RydWN0dXJhbC1kaXJlY3RpdmUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGA8bXktYXR0cmlidXRlLWRpcmVjdGl2ZXM+PC9teS1hdHRyaWJ1dGUtZGlyZWN0aXZlcz5cbiAgICA8YnIvPjxici8+XG4gICAgPGgxPk15IFN0cnVjdHVyYWwgRGlyZWN0aXZlczwvaDE+XG4gICAgPG15LXN0cnVjdHVyYWwtZGlyZWN0aXZlcz48L215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcz5gLFxuICAgIGRpcmVjdGl2ZXM6IFtBdHRyaWJ1dGVEaXJlY3RpdmVzLCBTdHJ1Y3R1cmFsRGlyZWN0aXZlc11cblxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAge1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

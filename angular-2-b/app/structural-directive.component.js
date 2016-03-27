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
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n  <section class=\"directive\">\n    <h2>*ngIf Structural directive</h2>\n    <div>\n      Enter a number between 1 and 50\n      <br/>\n      <input type=\"text\" #number (keyup)=\"0\">\n      </div>\n    <div *ngIf=\"number.value > 0 && number.value < 51\">\n    <h4>All elements which stand between tags with *ngIf <br/>\n    are saw if condition is true </h4>\n    Number belongs to the interspace </div>\n  </section>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBRSwwYUFZQztxQkFDWixDQUFDOzt3Q0FBQTtnQkFHRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgPGgyPipuZ0lmIFN0cnVjdHVyYWwgZGlyZWN0aXZlPC9oMj5cbiAgICA8ZGl2PlxuICAgICAgRW50ZXIgYSBudW1iZXIgYmV0d2VlbiAxIGFuZCA1MFxuICAgICAgPGJyLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW1iZXIgKGtleXVwKT1cIjBcIj5cbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJudW1iZXIudmFsdWUgPiAwICYmIG51bWJlci52YWx1ZSA8IDUxXCI+XG4gICAgPGg0PkFsbCBlbGVtZW50cyB3aGljaCBzdGFuZCBiZXR3ZWVuIHRhZ3Mgd2l0aCAqbmdJZiA8YnIvPlxuICAgIGFyZSBzYXcgaWYgY29uZGl0aW9uIGlzIHRydWUgPC9oND5cbiAgICBOdW1iZXIgYmVsb25ncyB0byB0aGUgaW50ZXJzcGFjZSA8L2Rpdj5cbiAgPC9zZWN0aW9uPmAsXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyYWxEaXJlY3RpdmVze1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

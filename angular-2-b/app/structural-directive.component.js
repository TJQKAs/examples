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
                    this.list = ['Acai', 'Apple', 'Apricots', 'Avocado ', 'Banana', 'Blackberry', 'Blueberries', 'Cherries', 'Currents', 'Cucumber', 'Goji berries', 'Durian'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n  <section class=\"directive\">\n    <h2>*ngIf Structural directive</h2>\n    <div>\n      Enter a number between 1 and 50\n      <br/>\n      <input type=\"text\" #number (keyup)=\"0\">\n      </div>\n    <div *ngIf=\"number.value > 0 && number.value < 51\">\n    <h4 class=\"underlined\">All elements which stand between tags with *ngIf <br/>\n    are saw if condition is true </h4>\n    Number belongs to the interspace </div>\n  </section>\n  <section class=\"directive\">\n    <h2>*ngFor</h2>\n    <div>\n      <ul>\n        <li class=\"underlined\" *ngFor=\"#item of list, #i = index\">{{item}} - number {{i+1}}</li>\n      </ul>\n    </div>\n  </section>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFBQTtvQkFFSSxTQUFJLEdBQUksQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFFBQVEsQ0FBQyxDQUFFO2dCQUNqSixDQURpSixBQUNoSjtnQkE5QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUseXBCQW9CQztxQkFJWixDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBSEEsQUFHQyxJQURnSjtZQUZqSix1REFFaUosQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgPGgyPipuZ0lmIFN0cnVjdHVyYWwgZGlyZWN0aXZlPC9oMj5cbiAgICA8ZGl2PlxuICAgICAgRW50ZXIgYSBudW1iZXIgYmV0d2VlbiAxIGFuZCA1MFxuICAgICAgPGJyLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW1iZXIgKGtleXVwKT1cIjBcIj5cbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJudW1iZXIudmFsdWUgPiAwICYmIG51bWJlci52YWx1ZSA8IDUxXCI+XG4gICAgPGg0IGNsYXNzPVwidW5kZXJsaW5lZFwiPkFsbCBlbGVtZW50cyB3aGljaCBzdGFuZCBiZXR3ZWVuIHRhZ3Mgd2l0aCAqbmdJZiA8YnIvPlxuICAgIGFyZSBzYXcgaWYgY29uZGl0aW9uIGlzIHRydWUgPC9oND5cbiAgICBOdW1iZXIgYmVsb25ncyB0byB0aGUgaW50ZXJzcGFjZSA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgIDxoMj4qbmdGb3I8L2gyPlxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzcz1cInVuZGVybGluZWRcIiAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0LCAjaSA9IGluZGV4XCI+e3tpdGVtfX0gLSBudW1iZXIge3tpKzF9fTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+YFxuXG5cbiAgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmFsRGlyZWN0aXZlc3tcblxuICAgIGxpc3QgPSAgWydBY2FpJywnQXBwbGUnLCdBcHJpY290cycsJ0F2b2NhZG8gJywnQmFuYW5hJywnQmxhY2tiZXJyeScsJ0JsdWViZXJyaWVzJywnQ2hlcnJpZXMnLCdDdXJyZW50cycsJ0N1Y3VtYmVyJywnR29qaSBiZXJyaWVzJywnRHVyaWFuJ10gO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

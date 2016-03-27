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
                        template: "\n  <section class=\"directive\">\n    <h2>*ngIf Structural directive</h2>\n    <div>\n      Enter a number between 1 and 50\n      <br/>\n      <input type=\"text\" #number (keyup)=\"0\">\n      </div>\n    <div *ngIf=\"number.value > 0 && number.value < 51\">\n    <h4 class=\"underlined\">All elements which stand between tags with *ngIf <br/>\n    are saw if condition is true </h4>\n    Number belongs to the interspace </div>\n  </section>\n  <section class=\"directive\">\n    <h2>*ngFor</h2>\n    <div>\n      <ul>\n        <li class=\"underlined\" *ngFor=\"#item of list, #i = index\">{{item}} - number {{i+1}}</li>\n      </ul>\n    </div>\n  </section>\n  <section class=\"directive\">\n    <h2>[ngSwitch]</h2>\n    <div>\n      Enter red, yellow or green color\n      <br/>\n      <input type=\"text\" #color (keyup)=\"0\">\n    </div>\n    <div [ngSwitch]=\"color.value\">\n      <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is red</span></template>\n      <template [ngSwitchWhen]=\"'yellow'\"><span style=\"color: yellow\">Color is yellow</span></template>\n      <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is green</span></template>\n      <template ngSwitchDefault><span style=\"color: blue\">Blue is default color</span></template>\n      </div>\n\n  </section>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRDQTtnQkFBQTtvQkFFSSxTQUFJLEdBQUksQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFFBQVEsQ0FBQyxDQUFFO2dCQUNqSixDQURpSixBQUNoSjtnQkE3Q0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUscXpDQW1DQztxQkFJWixDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBSEEsQUFHQyxJQURnSjtZQUZqSix1REFFaUosQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgPGgyPipuZ0lmIFN0cnVjdHVyYWwgZGlyZWN0aXZlPC9oMj5cbiAgICA8ZGl2PlxuICAgICAgRW50ZXIgYSBudW1iZXIgYmV0d2VlbiAxIGFuZCA1MFxuICAgICAgPGJyLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW1iZXIgKGtleXVwKT1cIjBcIj5cbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJudW1iZXIudmFsdWUgPiAwICYmIG51bWJlci52YWx1ZSA8IDUxXCI+XG4gICAgPGg0IGNsYXNzPVwidW5kZXJsaW5lZFwiPkFsbCBlbGVtZW50cyB3aGljaCBzdGFuZCBiZXR3ZWVuIHRhZ3Mgd2l0aCAqbmdJZiA8YnIvPlxuICAgIGFyZSBzYXcgaWYgY29uZGl0aW9uIGlzIHRydWUgPC9oND5cbiAgICBOdW1iZXIgYmVsb25ncyB0byB0aGUgaW50ZXJzcGFjZSA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgIDxoMj4qbmdGb3I8L2gyPlxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzcz1cInVuZGVybGluZWRcIiAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0LCAjaSA9IGluZGV4XCI+e3tpdGVtfX0gLSBudW1iZXIge3tpKzF9fTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgPGgyPltuZ1N3aXRjaF08L2gyPlxuICAgIDxkaXY+XG4gICAgICBFbnRlciByZWQsIHllbGxvdyBvciBncmVlbiBjb2xvclxuICAgICAgPGJyLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb2xvciAoa2V5dXApPVwiMFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+XG4gICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCIncmVkJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPkNvbG9yIGlzIHJlZDwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ3llbGxvdydcIj48c3BhbiBzdHlsZT1cImNvbG9yOiB5ZWxsb3dcIj5Db2xvciBpcyB5ZWxsb3c8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidncmVlbidcIj48c3BhbiBzdHlsZT1cImNvbG9yOiBncmVlblwiPkNvbG9yIGlzIGdyZWVuPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PjxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWVcIj5CbHVlIGlzIGRlZmF1bHQgY29sb3I8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuXG4gIDwvc2VjdGlvbj5gXG5cblxuICAsXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyYWxEaXJlY3RpdmVze1xuXG4gICAgbGlzdCA9ICBbJ0FjYWknLCdBcHBsZScsJ0Fwcmljb3RzJywnQXZvY2FkbyAnLCdCYW5hbmEnLCdCbGFja2JlcnJ5JywnQmx1ZWJlcnJpZXMnLCdDaGVycmllcycsJ0N1cnJlbnRzJywnQ3VjdW1iZXInLCdHb2ppIGJlcnJpZXMnLCdEdXJpYW4nXSA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

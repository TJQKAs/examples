System.register(['angular2/core', './unless.directive'], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['Acai', 'Apple', 'Apricots', 'Avocado ', 'Banana', 'Blackberry', 'Blueberries', 'Cherries', 'Currents', 'Cucumber', 'Goji berries', 'Durian'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n  <section class=\"directive\">\n    <h2>*ngIf Structural directive</h2>\n    <div>\n      Enter a number between 1 and 50\n      <br/>\n      <input type=\"text\" #number (keyup)=\"0\">\n      </div>\n    <div *ngIf=\"number.value > 0 && number.value < 51\">\n    <h4 class=\"underlined\">All elements which stand between tags with *ngIf <br/>\n    are saw if condition is true </h4>\n    Number belongs to the interspace </div>\n  </section>\n  <section class=\"directive\">\n    <h2>*ngFor</h2>\n    <div>\n      <ul>\n        <li class=\"underlined\" *ngFor=\"#item of list, #i = index\">{{item}} - number {{i+1}}</li>\n      </ul>\n    </div>\n  </section>\n  <section class=\"directive\">\n    <h2>[ngSwitch]</h2>\n    <div>\n      Enter red, yellow or green color\n      <br/>\n      <input type=\"text\" #color (keyup)=\"0\">\n    </div>\n    <div [ngSwitch]=\"color.value\">\n      <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is red</span></template>\n      <template [ngSwitchWhen]=\"'yellow'\"><span style=\"color: yellow\">Color is yellow</span></template>\n      <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is green</span></template>\n      <template ngSwitchDefault><span style=\"color: blue\">Blue is default color</span></template>\n      </div>\n  </section>\n   <section class=\"directive\">\n     <h2>Custom StructuralDirectives: *myUnless</h2>\n     <div>\n       Enter true or false:\n       <br/>\n       <input type=\"text\" #condition (keyup)=\"0\">\n     </div>\n     <div *myUnless=\"condition.value != 'false'\" >\n       Only shown if 'false' was typed\n     </div>\n   </section>\n  ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNEQTtnQkFBQTtvQkFFSSxTQUFJLEdBQUksQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFFBQVEsQ0FBQyxDQUFFO2dCQUNqSixDQURpSixBQUNoSjtnQkF0REQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsb29EQThDVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUM5QixDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBSEEsQUFHQyxJQURnSjtZQUZqSix1REFFaUosQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnR7VW5sZXNzRGlyZWN0aXZlfSBmcm9tICcuL3VubGVzcy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgIDxoMj4qbmdJZiBTdHJ1Y3R1cmFsIGRpcmVjdGl2ZTwvaDI+XG4gICAgPGRpdj5cbiAgICAgIEVudGVyIGEgbnVtYmVyIGJldHdlZW4gMSBhbmQgNTBcbiAgICAgIDxici8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwibnVtYmVyLnZhbHVlID4gMCAmJiBudW1iZXIudmFsdWUgPCA1MVwiPlxuICAgIDxoNCBjbGFzcz1cInVuZGVybGluZWRcIj5BbGwgZWxlbWVudHMgd2hpY2ggc3RhbmQgYmV0d2VlbiB0YWdzIHdpdGggKm5nSWYgPGJyLz5cbiAgICBhcmUgc2F3IGlmIGNvbmRpdGlvbiBpcyB0cnVlIDwvaDQ+XG4gICAgTnVtYmVyIGJlbG9uZ3MgdG8gdGhlIGludGVyc3BhY2UgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICA8aDI+Km5nRm9yPC9oMj5cbiAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3M9XCJ1bmRlcmxpbmVkXCIgKm5nRm9yPVwiI2l0ZW0gb2YgbGlzdCwgI2kgPSBpbmRleFwiPnt7aXRlbX19IC0gbnVtYmVyIHt7aSsxfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cbiAgICA8ZGl2PlxuICAgICAgRW50ZXIgcmVkLCB5ZWxsb3cgb3IgZ3JlZW4gY29sb3JcbiAgICAgIDxici8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29sb3IgKGtleXVwKT1cIjBcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjb2xvci52YWx1ZVwiPlxuICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ3JlZCdcIj48c3BhbiBzdHlsZT1cImNvbG9yOiByZWRcIj5Db2xvciBpcyByZWQ8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIid5ZWxsb3cnXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjogeWVsbG93XCI+Q29sb3IgaXMgeWVsbG93PC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInZ3JlZW4nXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW5cIj5Db2xvciBpcyBncmVlbjwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIG5nU3dpdGNoRGVmYXVsdD48c3BhbiBzdHlsZT1cImNvbG9yOiBibHVlXCI+Qmx1ZSBpcyBkZWZhdWx0IGNvbG9yPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgPGgyPkN1c3RvbSBTdHJ1Y3R1cmFsRGlyZWN0aXZlczogKm15VW5sZXNzPC9oMj5cbiAgICAgPGRpdj5cbiAgICAgICBFbnRlciB0cnVlIG9yIGZhbHNlOlxuICAgICAgIDxici8+XG4gICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbmRpdGlvbiAoa2V5dXApPVwiMFwiPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiAqbXlVbmxlc3M9XCJjb25kaXRpb24udmFsdWUgIT0gJ2ZhbHNlJ1wiID5cbiAgICAgICBPbmx5IHNob3duIGlmICdmYWxzZScgd2FzIHR5cGVkXG4gICAgIDwvZGl2PlxuICAgPC9zZWN0aW9uPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbVW5sZXNzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmFsRGlyZWN0aXZlc3tcblxuICAgIGxpc3QgPSAgWydBY2FpJywnQXBwbGUnLCdBcHJpY290cycsJ0F2b2NhZG8gJywnQmFuYW5hJywnQmxhY2tiZXJyeScsJ0JsdWViZXJyaWVzJywnQ2hlcnJpZXMnLCdDdXJyZW50cycsJ0N1Y3VtYmVyJywnR29qaSBiZXJyaWVzJywnRHVyaWFuJ10gO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

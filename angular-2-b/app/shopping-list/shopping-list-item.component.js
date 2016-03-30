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
    var ShoppingListIemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListIemComponent = (function () {
                function ShoppingListIemComponent() {
                    this.item = { name: ' ', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListIemComponent.prototype.onDelete = function () {
                    this.removed.emit(this.emit);
                };
                ShoppingListIemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n  <div class=\"input\">\n    <label for=\"item-name\">Name</label>\n    <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n  </div>\n  <div class=\"input\">\n    <label for=\"item-amt\">Amount</label>\n    <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n  </div>\n  <button class=\"danger\" (click)=\"onDelete()\">Delete!</button>\n  ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListIemComponent);
                return ShoppingListIemComponent;
            }());
            exports_1("ShoppingListIemComponent", ShoppingListIemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFBQTtvQkFDSyxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDOUIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQUs1QyxDQUFDO2dCQUhJLDJDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQXZCTjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxvWEFVVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDckIsQ0FBQzs7NENBQUE7Z0JBU0YsK0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtEQU9DLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtMaXN0SXRlbX1mcm9tICcuL2xpc3RJdGVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgPC9kaXY+XG4gIDxidXR0b24gY2xhc3M9XCJkYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSE8L2J1dHRvbj5cbiAgYCxcbiAgaW5wdXRzOiBbJ2l0ZW0nXSxcbiAgb3V0cHV0czogWydyZW1vdmVkJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RJZW1Db21wb25lbnR7XG4gICAgIGl0ZW0gPSB7bmFtZTogJyAnLCBhbW91bnQ6IDB9O1xuICAgICByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblxuICAgICBvbkRlbGV0ZSgpe1xuICAgICAgIHRoaXMucmVtb3ZlZC5lbWl0KHRoaXMuZW1pdCk7XG4gICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

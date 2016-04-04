System.register(['angular2/core', './shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListIemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListIemComponent = (function () {
                function ShoppingListIemComponent(_shopListService) {
                    this._shopListService = _shopListService;
                    this.item = { name: ' ', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListIemComponent.prototype.onDelete = function () {
                    // when we click button with tag onDelete , runs onDelete function
                    // which sets to elem in which we click button  referal _shopListService which call
                    // method removeItems from ShoppingListService service
                    // method splice listItem array and delete only this elem from array
                    this.listItem = this._shopListService.removeItems();
                    this.removed.emit(null);
                };
                ShoppingListIemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n  <div class=\"input\">\n    <label for=\"item-name\">Name</label>\n    <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n  </div>\n  <div class=\"input\">\n    <label for=\"item-amt\">Amount</label>\n    <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n  </div>\n  <button class=\"danger\" (click)=\"onDelete()\">Delete!</button>\n  ",
                        inputs: ['item'],
                        outputs: ['removed'],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListIemComponent);
                return ShoppingListIemComponent;
            }());
            exports_1("ShoppingListIemComponent", ShoppingListIemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFHSSxrQ0FBb0IsZ0JBQW9DO29CQUFwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO29CQUZ2RCxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDOUIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO2dCQUN1QixDQUFDO2dCQUUxRCwyQ0FBUSxHQUFSO29CQUNFLGtFQUFrRTtvQkFDbEUsbUZBQW1GO29CQUNuRixzREFBc0Q7b0JBQ3RELG9FQUFvRTtvQkFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQTlCTjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxvWEFVVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDcEIsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ2pDLENBQUM7OzRDQUFBO2dCQWVGLCtCQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCwrREFhQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9ZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnR7TGlzdEl0ZW19ZnJvbSAnLi9saXN0SXRlbSc7XG5pbXBvcnR7U2hvcHBpbmdMaXN0U2VydmljZX1mcm9tICcuL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGNsYXNzPVwiZGFuZ2VyXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGUhPC9idXR0b24+XG4gIGAsXG4gIGlucHV0czogWydpdGVtJ10sXG4gIG91dHB1dHM6IFsncmVtb3ZlZCddLFxuICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEllbUNvbXBvbmVudHtcbiAgICAgaXRlbSA9IHtuYW1lOiAnICcsIGFtb3VudDogMH07XG4gICAgIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wTGlzdFNlcnZpY2U6U2hvcHBpbmdMaXN0U2VydmljZSl7fVxuXG4gICAgIG9uRGVsZXRlKCl7XG4gICAgICAgLy8gd2hlbiB3ZSBjbGljayBidXR0b24gd2l0aCB0YWcgb25EZWxldGUgLCBydW5zIG9uRGVsZXRlIGZ1bmN0aW9uXG4gICAgICAgLy8gd2hpY2ggc2V0cyB0byBlbGVtIGluIHdoaWNoIHdlIGNsaWNrIGJ1dHRvbiAgcmVmZXJhbCBfc2hvcExpc3RTZXJ2aWNlIHdoaWNoIGNhbGxcbiAgICAgICAvLyBtZXRob2QgcmVtb3ZlSXRlbXMgZnJvbSBTaG9wcGluZ0xpc3RTZXJ2aWNlIHNlcnZpY2VcbiAgICAgICAvLyBtZXRob2Qgc3BsaWNlIGxpc3RJdGVtIGFycmF5IGFuZCBkZWxldGUgb25seSB0aGlzIGVsZW0gZnJvbSBhcnJheVxuICAgICAgdGhpcy5saXN0SXRlbSA9IHRoaXMuX3Nob3BMaXN0U2VydmljZS5yZW1vdmVJdGVtcygpO1xuICAgICAgdGhpcy5yZW1vdmVkLmVtaXQobnVsbCk7XG4gICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

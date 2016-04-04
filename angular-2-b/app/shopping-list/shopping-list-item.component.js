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
                    // send to shopping-list.component message with removing event
                    // for this use EventEmitter
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFHSSxrQ0FBb0IsZ0JBQW9DO29CQUFwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO29CQUZ2RCxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDOUIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO2dCQUN1QixDQUFDO2dCQUUxRCwyQ0FBUSxHQUFSO29CQUNFLGtFQUFrRTtvQkFDbEUsbUZBQW1GO29CQUNuRixzREFBc0Q7b0JBQ3RELG9FQUFvRTtvQkFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BELDhEQUE4RDtvQkFDOUQsNEJBQTRCO29CQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFoQ047b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsb1hBVVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3dCQUNoQixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ3BCLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNqQyxDQUFDOzs0Q0FBQTtnQkFpQkYsK0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELCtEQWVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtMaXN0SXRlbX1mcm9tICcuL2xpc3RJdGVtJztcbmltcG9ydHtTaG9wcGluZ0xpc3RTZXJ2aWNlfWZyb20gJy4vc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgPC9kaXY+XG4gIDxidXR0b24gY2xhc3M9XCJkYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSE8L2J1dHRvbj5cbiAgYCxcbiAgaW5wdXRzOiBbJ2l0ZW0nXSxcbiAgb3V0cHV0czogWydyZW1vdmVkJ10sXG4gIHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0SWVtQ29tcG9uZW50e1xuICAgICBpdGVtID0ge25hbWU6ICcgJywgYW1vdW50OiAwfTtcbiAgICAgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BMaXN0U2VydmljZTpTaG9wcGluZ0xpc3RTZXJ2aWNlKXt9XG5cbiAgICAgb25EZWxldGUoKXtcbiAgICAgICAvLyB3aGVuIHdlIGNsaWNrIGJ1dHRvbiB3aXRoIHRhZyBvbkRlbGV0ZSAsIHJ1bnMgb25EZWxldGUgZnVuY3Rpb25cbiAgICAgICAvLyB3aGljaCBzZXRzIHRvIGVsZW0gaW4gd2hpY2ggd2UgY2xpY2sgYnV0dG9uICByZWZlcmFsIF9zaG9wTGlzdFNlcnZpY2Ugd2hpY2ggY2FsbFxuICAgICAgIC8vIG1ldGhvZCByZW1vdmVJdGVtcyBmcm9tIFNob3BwaW5nTGlzdFNlcnZpY2Ugc2VydmljZVxuICAgICAgIC8vIG1ldGhvZCBzcGxpY2UgbGlzdEl0ZW0gYXJyYXkgYW5kIGRlbGV0ZSBvbmx5IHRoaXMgZWxlbSBmcm9tIGFycmF5XG4gICAgICB0aGlzLmxpc3RJdGVtID0gdGhpcy5fc2hvcExpc3RTZXJ2aWNlLnJlbW92ZUl0ZW1zKCk7XG4gICAgICAvLyBzZW5kIHRvIHNob3BwaW5nLWxpc3QuY29tcG9uZW50IG1lc3NhZ2Ugd2l0aCByZW1vdmluZyBldmVudFxuICAgICAgLy8gZm9yIHRoaXMgdXNlIEV2ZW50RW1pdHRlclxuICAgICAgdGhpcy5yZW1vdmVkLmVtaXQobnVsbCk7XG4gICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

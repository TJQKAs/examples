System.register(['angular2/core', './shopping-new-item-list.component'], function(exports_1, context_1) {
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
    var core_1, shopping_new_item_list_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_new_item_list_component_1_1) {
                shopping_new_item_list_component_1 = shopping_new_item_list_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    // for outputting anything  from the list , array with js object which holds our data
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n      <section>\n      <shopping-new-list-item (itemAdded)=\"onItemAdded($event)\">\n      </shopping-new-list-item>\n       </section>\n      <section>\n        <h3>My list </h3>\n        <div class=\"list\">\n         <ul>\n           <li *ngFor=\"#listItem of listItems\">{{listItem.name}} amount :  {{listItem.amount}}</li>\n         </ul>\n        </div>\n      </section>\n      <section>\n        Edit Item\n      </section>\n  ",
                        directives: [shopping_new_item_list_component_1.ShoppingNewListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkU7Z0JBQUE7b0JBQ0UscUZBQXFGO29CQUNyRixjQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWtDLENBQUM7Z0JBSzFELENBQUM7Z0JBSEMsMkNBQVcsR0FBWCxVQUFZLElBQWtDO29CQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkE3Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFDLHViQWdCUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQywyREFBd0IsQ0FBQztxQkFDdkMsQ0FBQzs7eUNBQUE7Z0JBU0EsNEJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHlEQU9DLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtTaG9wcGluZ05ld0xpc3RDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblxuICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICB0ZW1wbGF0ZTpgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgIDxzaG9wcGluZy1uZXctbGlzdC1pdGVtIChpdGVtQWRkZWQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiPlxuICAgICAgPC9zaG9wcGluZy1uZXctbGlzdC1pdGVtPlxuICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDM+TXkgbGlzdCA8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgPHVsPlxuICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiPnt7bGlzdEl0ZW0ubmFtZX19IGFtb3VudCA6ICB7e2xpc3RJdGVtLmFtb3VudH19PC9saT5cbiAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIEVkaXQgSXRlbVxuICAgICAgPC9zZWN0aW9uPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdOZXdMaXN0Q29tcG9uZW50XVxufSlcblxuICBleHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50e1xuICAgIC8vIGZvciBvdXRwdXR0aW5nIGFueXRoaW5nICBmcm9tIHRoZSBsaXN0ICwgYXJyYXkgd2l0aCBqcyBvYmplY3Qgd2hpY2ggaG9sZHMgb3VyIGRhdGFcbiAgICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8e25hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXJ9PigpO1xuXG4gICAgb25JdGVtQWRkZWQoaXRlbToge25hbWU6c3RyaW5nLCBhbW91bnQ6bnVtYmVyfSl7XG4gICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtuYW1lOiBpdGVtLm5hbWUsIGFtb3VudDogaXRlbS5hbW91bnR9KTtcbiAgICB9XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

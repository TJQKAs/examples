System.register(['angular2/core', './shopping-new-item-list.component', './shopping-list-item.component', './shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_new_item_list_component_1, shopping_list_item_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_new_item_list_component_1_1) {
                shopping_new_item_list_component_1 = shopping_new_item_list_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shopListService) {
                    this._shopListService = _shopListService;
                    // for outputting anything  from the list , array with js object which holds our data
                    this.listItems = Array();
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    // array ListItems gets data from _shopListService service and its method getItems
                    this.listItems = this._shopListService.getItems();
                };
                //<shopping-list-item [item]="selectedItem" (removed)="onRemove()"
                // listen message for (removed) if we catch one we fulfill function onRemove
                // which sets to this selectedItem param null
                // that's how we can clean elem which we've deleted just before
                //  add this function because without
                ShoppingListComponent.prototype.onRemove = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n      <section>\n      <shopping-new-list-item></shopping-new-list-item>\n       </section>\n      <section>\n        <h3>My list </h3>\n        <div class=\"list\">\n         <ul>\n           <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} amount :  {{listItem.amount}}</li>\n         </ul>\n        </div>\n      </section>\n      <section *ngIf=\"selectedItem!=null\">\n      <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove()\"></shopping-list-item>\n      </section>\n  ",
                        directives: [shopping_new_item_list_component_1.ShoppingNewListComponent, shopping_list_item_component_1.ShoppingListIemComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkU7Z0JBS0UsK0JBQW9CLGdCQUFvQztvQkFBcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtvQkFKeEQscUZBQXFGO29CQUNyRixjQUFTLEdBQUcsS0FBSyxFQUFVLENBQUM7Z0JBRytCLENBQUM7Z0JBRTdELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNFLGtGQUFrRjtvQkFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsa0VBQWtFO2dCQUNsRSw0RUFBNEU7Z0JBQzVFLDZDQUE2QztnQkFDN0MsK0RBQStEO2dCQUNoRSxxQ0FBcUM7Z0JBQ3BDLHdDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBN0NKO29CQUFDLGdCQUFTLENBQUM7d0JBRVQsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBQyxzaEJBZVI7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMkRBQXdCLEVBQUUsdURBQXdCLENBQUM7d0JBQ2hFLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNqQyxDQUFDOzt5Q0FBQTtnQkF5QkEsNEJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHlEQXVCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtTaG9wcGluZ05ld0xpc3RDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0e0xpc3RJdGVtfWZyb20gJy4vbGlzdEl0ZW0nO1xuaW1wb3J0e1Nob3BwaW5nTGlzdEllbUNvbXBvbmVudH1mcm9tICcuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0e1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4vc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cbiAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgICAgPHNlY3Rpb24+XG4gICAgICA8c2hvcHBpbmctbmV3LWxpc3QtaXRlbT48L3Nob3BwaW5nLW5ldy1saXN0LWl0ZW0+XG4gICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMz5NeSBsaXN0IDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICA8dWw+XG4gICAgICAgICAgIDxsaSAqbmdGb3I9XCIjbGlzdEl0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGxpc3RJdGVtKVwiPnt7bGlzdEl0ZW0ubmFtZX19IGFtb3VudCA6ICB7e2xpc3RJdGVtLmFtb3VudH19PC9saT5cbiAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gKm5nSWY9XCJzZWxlY3RlZEl0ZW0hPW51bGxcIj5cbiAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPVwic2VsZWN0ZWRJdGVtXCIgKHJlbW92ZWQpPVwib25SZW1vdmUoKVwiPjwvc2hvcHBpbmctbGlzdC1pdGVtPlxuICAgICAgPC9zZWN0aW9uPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdOZXdMaXN0Q29tcG9uZW50LCBTaG9wcGluZ0xpc3RJZW1Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxufSlcblxuICBleHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIC8vIGZvciBvdXRwdXR0aW5nIGFueXRoaW5nICBmcm9tIHRoZSBsaXN0ICwgYXJyYXkgd2l0aCBqcyBvYmplY3Qgd2hpY2ggaG9sZHMgb3VyIGRhdGFcbiAgICBsaXN0SXRlbXMgPSBBcnJheTxMaXN0SXRlbT47XG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BMaXN0U2VydmljZTpTaG9wcGluZ0xpc3RTZXJ2aWNlICl7fVxuXG4gICBvblNlbGVjdChpdGVtOiBMaXN0SXRlbSl7XG4gICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgIH1cbiAgIG5nT25Jbml0KCk6YW55e1xuICAgICAvLyBhcnJheSBMaXN0SXRlbXMgZ2V0cyBkYXRhIGZyb20gX3Nob3BMaXN0U2VydmljZSBzZXJ2aWNlIGFuZCBpdHMgbWV0aG9kIGdldEl0ZW1zXG4gICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5fc2hvcExpc3RTZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICB9XG5cbiAgIC8vPHNob3BwaW5nLWxpc3QtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZSgpXCJcbiAgIC8vIGxpc3RlbiBtZXNzYWdlIGZvciAocmVtb3ZlZCkgaWYgd2UgY2F0Y2ggb25lIHdlIGZ1bGZpbGwgZnVuY3Rpb24gb25SZW1vdmVcbiAgIC8vIHdoaWNoIHNldHMgdG8gdGhpcyBzZWxlY3RlZEl0ZW0gcGFyYW0gbnVsbFxuICAgLy8gdGhhdCdzIGhvdyB3ZSBjYW4gY2xlYW4gZWxlbSB3aGljaCB3ZSd2ZSBkZWxldGVkIGp1c3QgYmVmb3JlXG4gIC8vICBhZGQgdGhpcyBmdW5jdGlvbiBiZWNhdXNlIHdpdGhvdXRcbiAgIG9uUmVtb3ZlKCl7XG4gICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgIH1cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

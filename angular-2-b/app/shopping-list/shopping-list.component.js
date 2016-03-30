System.register(['angular2/core', './shopping-new-item-list.component', './shopping-list-item.component'], function(exports_1, context_1) {
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
    var core_1, shopping_new_item_list_component_1, shopping_list_item_component_1;
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
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n      <section>\n      <shopping-new-list-item (itemAdded)=\"onItemAdded($event)\">\n      </shopping-new-list-item>\n       </section>\n      <section>\n        <h3>My list </h3>\n        <div class=\"list\">\n         <ul>\n           <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} amount :  {{listItem.amount}}</li>\n         </ul>\n        </div>\n      </section>\n      <section *ngIf=\"selectedItem!=null\">\n      <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n      </section>\n  ",
                        directives: [shopping_new_item_list_component_1.ShoppingNewListComponent, shopping_list_item_component_1.ShoppingListIemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkU7Z0JBQUE7b0JBQ0UscUZBQXFGO29CQUNyRixjQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztnQkFjdEMsQ0FBQztnQkFYQywyQ0FBVyxHQUFYLFVBQVksSUFBYztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBQ0Ysd0NBQVEsR0FBUixVQUFTLElBQWM7b0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQUNELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBckNKO29CQUFDLGdCQUFTLENBQUM7d0JBRVQsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBQyx3a0JBZ0JSO3dCQUNELFVBQVUsRUFBRSxDQUFDLDJEQUF3QixFQUFFLHVEQUF3QixDQUFDO3FCQUNqRSxDQUFDOzt5Q0FBQTtnQkFrQkEsNEJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHlEQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnR7U2hvcHBpbmdOZXdMaXN0Q29tcG9uZW50fSBmcm9tICcuL3Nob3BwaW5nLW5ldy1pdGVtLWxpc3QuY29tcG9uZW50JztcbmltcG9ydHtMaXN0SXRlbX1mcm9tICcuL2xpc3RJdGVtJztcbmltcG9ydHtTaG9wcGluZ0xpc3RJZW1Db21wb25lbnR9ZnJvbSAnLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cbiAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgICAgPHNlY3Rpb24+XG4gICAgICA8c2hvcHBpbmctbmV3LWxpc3QtaXRlbSAoaXRlbUFkZGVkKT1cIm9uSXRlbUFkZGVkKCRldmVudClcIj5cbiAgICAgIDwvc2hvcHBpbmctbmV3LWxpc3QtaXRlbT5cbiAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgzPk15IGxpc3QgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgIDx1bD5cbiAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNsaXN0SXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPVwib25TZWxlY3QobGlzdEl0ZW0pXCI+e3tsaXN0SXRlbS5uYW1lfX0gYW1vdW50IDogIHt7bGlzdEl0ZW0uYW1vdW50fX08L2xpPlxuICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdGVkSXRlbSE9bnVsbFwiPlxuICAgICAgPHNob3BwaW5nLWxpc3QtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LWl0ZW0+XG4gICAgICA8L3NlY3Rpb24+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ05ld0xpc3RDb21wb25lbnQsIFNob3BwaW5nTGlzdEllbUNvbXBvbmVudF1cbn0pXG5cbiAgZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcbiAgICAvLyBmb3Igb3V0cHV0dGluZyBhbnl0aGluZyAgZnJvbSB0aGUgbGlzdCAsIGFycmF5IHdpdGgganMgb2JqZWN0IHdoaWNoIGhvbGRzIG91ciBkYXRhXG4gICAgbGlzdEl0ZW1zID0gbmV3IEFycmF5PHtMaXN0SXRlbX0+KCk7XG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcblxuICAgIG9uSXRlbUFkZGVkKGl0ZW06IExpc3RJdGVtKXtcbiAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgYW1vdW50OiBpdGVtLmFtb3VudH0pO1xuICAgIH1cbiAgIG9uU2VsZWN0KGl0ZW06IExpc3RJdGVtKXtcbiAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgfVxuICAgb25SZW1vdmUoaXRlbTogTGlzdEl0ZW0pe1xuICAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgIH1cblxuICB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

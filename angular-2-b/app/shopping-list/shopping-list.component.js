System.register(['angular2/core', './shopping-new-item-list.component', './shopping-list-item.component', './shopping-list.service', '../filter.pipe'], function(exports_1, context_1) {
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
    var core_1, shopping_new_item_list_component_1, shopping_list_item_component_1, shopping_list_service_1, filter_pipe_1;
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
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
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
                        template: "\n      <section>\n      <shopping-new-list-item></shopping-new-list-item>\n       </section>\n      <section>\n        <h3>My list </h3>\n        Filter:\n        <input type=\"text\" #filter (keyup)=\"0\">\n        <div class=\"list\">\n         <ul>\n           <li *ngFor=\"#listItem of listItems | myFilter:filter.value\" (click)=\"onSelect(listItem)\">{{listItem.name}} amount :  {{listItem.amount}}</li>\n         </ul>\n        </div>\n      </section>\n      <section *ngIf=\"selectedItem!=null\">\n      <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove()\"></shopping-list-item>\n      </section>\n  ",
                        directives: [shopping_new_item_list_component_1.ShoppingNewListComponent, shopping_list_item_component_1.ShoppingListIemComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                        pipes: [filter_pipe_1.FilterPipe]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});
//# sourceMappingURL=shopping-list.component.js.map
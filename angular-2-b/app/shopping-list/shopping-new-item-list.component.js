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
    var ShoppingNewListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingNewListComponent = (function () {
                function ShoppingNewListComponent(_shopListService) {
                    this._shopListService = _shopListService;
                    // js object
                    this.item = { name: '', amount: 0 };
                }
                // by clicking we fire this function which pass this.item to whoever be able catch this event (in our shopping-list component)
                ShoppingNewListComponent.prototype.onClick = function () {
                    ///   this._shopListService.insertItems(this.item); - we can't use this.item we should use new object
                    // otherwise cuase this.item its ref to object every new data will be the same because of  2WDB - data change everywhere in sameway
                    // with the same ref 
                    this._shopListService.insertItems({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingNewListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-new-list-item',
                        template: "\n<div class=\"input\">\n  <label for=\"item-name\">Name</label>\n  <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n</div>\n<div class=\"input\">\n  <label for=\"item-amt\">Amount</label>\n  <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n</div>\n<button (click)=\"onClick()\">Add Item!</button>\n "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingNewListComponent);
                return ShoppingNewListComponent;
            }());
            exports_1("ShoppingNewListComponent", ShoppingNewListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBSUUsa0NBQW9CLGdCQUFvQztvQkFBcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtvQkFIMUQsWUFBWTtvQkFDVixTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFFNkIsQ0FBQztnQkFFN0QsOEhBQThIO2dCQUM5SCwwQ0FBTyxHQUFQO29CQUNFLHFHQUFxRztvQkFDckcsbUlBQW1JO29CQUNwSSxxQkFBcUI7b0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkE1QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUMsd0JBQXdCO3dCQUNqQyxRQUFRLEVBQUUsaVZBVVQ7cUJBRUQsQ0FBQzs7NENBQUE7Z0JBZ0JGLCtCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwrREFjQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7Q29tcG9uZW50fWZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX1mcm9tICcuL2xpc3RJdGVtJztcbmltcG9ydHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOidzaG9wcGluZy1uZXctbGlzdC1pdGVtJyxcbiB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbjwvZGl2PlxuPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW0hPC9idXR0b24+XG4gYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdOZXdMaXN0Q29tcG9uZW50e1xuLy8ganMgb2JqZWN0XG4gIGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcExpc3RTZXJ2aWNlOlNob3BwaW5nTGlzdFNlcnZpY2Upe31cblxuLy8gYnkgY2xpY2tpbmcgd2UgZmlyZSB0aGlzIGZ1bmN0aW9uIHdoaWNoIHBhc3MgdGhpcy5pdGVtIHRvIHdob2V2ZXIgYmUgYWJsZSBjYXRjaCB0aGlzIGV2ZW50IChpbiBvdXIgc2hvcHBpbmctbGlzdCBjb21wb25lbnQpXG5vbkNsaWNrKCl7XG4gIC8vLyAgIHRoaXMuX3Nob3BMaXN0U2VydmljZS5pbnNlcnRJdGVtcyh0aGlzLml0ZW0pOyAtIHdlIGNhbid0IHVzZSB0aGlzLml0ZW0gd2Ugc2hvdWxkIHVzZSBuZXcgb2JqZWN0XG4gIC8vIG90aGVyd2lzZSBjdWFzZSB0aGlzLml0ZW0gaXRzIHJlZiB0byBvYmplY3QgZXZlcnkgbmV3IGRhdGEgd2lsbCBiZSB0aGUgc2FtZSBiZWNhdXNlIG9mICAyV0RCIC0gZGF0YSBjaGFuZ2UgZXZlcnl3aGVyZSBpbiBzYW1ld2F5XG4gLy8gd2l0aCB0aGUgc2FtZSByZWYgXG4gIHRoaXMuX3Nob3BMaXN0U2VydmljZS5pbnNlcnRJdGVtcyh7bmFtZTogdGhpcy5pdGVtLm5hbWUsIGFtb3VudDogdGhpcy5pdGVtLmFtb3VudH0pO1xufVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

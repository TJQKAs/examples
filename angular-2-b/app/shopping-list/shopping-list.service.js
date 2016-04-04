System.register(['angular2/core', './mock-shopping-list'], function(exports_1, context_1) {
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
    var core_1, mock_shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_shopping_list_1_1) {
                mock_shopping_list_1 = mock_shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                // add 3 methods get , add , delete
                // ListItem - argument which will pass through method
                ShoppingListService.prototype.getItems = function () {
                    return mock_shopping_list_1.shopping_list;
                };
                // just push to shopping_list item 
                ShoppingListService.prototype.insertItems = function (item) {
                    mock_shopping_list_1.shopping_list.push(item);
                };
                ShoppingListService.prototype.removeItems = function (item) {
                    // splice shopping_list and find item with index and delete it
                    mock_shopping_list_1.shopping_list.splice(mock_shopping_list_1.shopping_list.indexOf(item), 1);
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBZkEsbUNBQW1DO2dCQUVuQyxxREFBcUQ7Z0JBQ3BELHNDQUFRLEdBQVI7b0JBRUUsTUFBTSxDQUFDLGtDQUFhLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsbUNBQW1DO2dCQUNuQyx5Q0FBVyxHQUFYLFVBQVksSUFBYztvQkFDdEIsa0NBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QseUNBQVcsR0FBWCxVQUFZLElBQWM7b0JBQ3hCLDhEQUE4RDtvQkFDN0Qsa0NBQWEsQ0FBQyxNQUFNLENBQUMsa0NBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBakJIO29CQUFDLGlCQUFVLEVBQUU7O3VDQUFBO2dCQWtCYiwwQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQscURBZ0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0e0xpc3RJdGVtfWZyb20gJy4vbGlzdEl0ZW0nO1xuaW1wb3J0IHtzaG9wcGluZ19saXN0fWZyb20gJy4vbW9jay1zaG9wcGluZy1saXN0JztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0U2VydmljZSB7XG4gLy8gYWRkIDMgbWV0aG9kcyBnZXQgLCBhZGQgLCBkZWxldGVcblxuIC8vIExpc3RJdGVtIC0gYXJndW1lbnQgd2hpY2ggd2lsbCBwYXNzIHRocm91Z2ggbWV0aG9kXG4gIGdldEl0ZW1zKCl7XG5cbiAgICByZXR1cm4gc2hvcHBpbmdfbGlzdDtcbiAgfVxuICAvLyBqdXN0IHB1c2ggdG8gc2hvcHBpbmdfbGlzdCBpdGVtIFxuICBpbnNlcnRJdGVtcyhpdGVtOiBMaXN0SXRlbSl7XG4gICAgICBzaG9wcGluZ19saXN0LnB1c2goaXRlbSk7XG4gIH1cbiAgcmVtb3ZlSXRlbXMoaXRlbTogTGlzdEl0ZW0pe1xuICAgIC8vIHNwbGljZSBzaG9wcGluZ19saXN0IGFuZCBmaW5kIGl0ZW0gd2l0aCBpbmRleCBhbmQgZGVsZXRlIGl0XG4gICAgIHNob3BwaW5nX2xpc3Quc3BsaWNlKHNob3BwaW5nX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

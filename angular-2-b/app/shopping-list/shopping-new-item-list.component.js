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
    var ShoppingNewListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingNewListComponent = (function () {
                function ShoppingNewListComponent() {
                    // js object
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new core_1.EventEmitter();
                }
                // by clicking we fire this function which pass this.item to whoever be able catch this event (in our shopping-list component)
                ShoppingNewListComponent.prototype.onClick = function () {
                    this.itemAdded.emit(this.item);
                };
                ShoppingNewListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-new-list-item',
                        template: "\n<div class=\"input\">\n  <label for=\"item-name\">Name</label>\n  <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n</div>\n<div class=\"input\">\n  <label for=\"item-amt\">Amount</label>\n  <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n</div>\n<button (click)=\"onClick()\">Add Item!</button>\n ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingNewListComponent);
                return ShoppingNewListComponent;
            }());
            exports_1("ShoppingNewListComponent", ShoppingNewListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0EsWUFBWTtvQkFDVixTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDN0IsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQU8zQyxDQUFDO2dCQUxELDhIQUE4SDtnQkFDOUgsMENBQU8sR0FBUDtvQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBekJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFDLHdCQUF3Qjt3QkFDakMsUUFBUSxFQUFFLGlWQVVUO3dCQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFFdEIsQ0FBQzs7NENBQUE7Z0JBWUYsK0JBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELCtEQVVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1uZXctaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19ZnJvbSAnLi9saXN0SXRlbSc7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOidzaG9wcGluZy1uZXctbGlzdC1pdGVtJyxcbiB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbjwvZGl2PlxuPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW0hPC9idXR0b24+XG4gYCxcbiBvdXRwdXRzOiBbJ2l0ZW1BZGRlZCddXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ05ld0xpc3RDb21wb25lbnR7XG4vLyBqcyBvYmplY3RcbiAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgaXRlbUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblxuLy8gYnkgY2xpY2tpbmcgd2UgZmlyZSB0aGlzIGZ1bmN0aW9uIHdoaWNoIHBhc3MgdGhpcy5pdGVtIHRvIHdob2V2ZXIgYmUgYWJsZSBjYXRjaCB0aGlzIGV2ZW50IChpbiBvdXIgc2hvcHBpbmctbGlzdCBjb21wb25lbnQpXG5vbkNsaWNrKCl7XG4gIHRoaXMuaXRlbUFkZGVkLmVtaXQodGhpcy5pdGVtKTtcbn1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

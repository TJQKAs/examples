System.register(['angular2/core', './shopping-list.service', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1;
    var ShoppingNewListComponent;
    // additional filter which I've created
    function greaterthanZero(control) {
        // we return error that value less than zero if value < 0
        if (control.value <= 0) {
            return { lessThanZero: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingNewListComponent = (function () {
                // create references to components
                function ShoppingNewListComponent(_shopListService, _formBuilder) {
                    this._shopListService = _shopListService;
                    this._formBuilder = _formBuilder;
                    // js object
                    this.item = { name: '', amount: 0 };
                }
                // by clicking we fire this function which pass this.item to whoever be able catch this event (in our shopping-list component)
                ShoppingNewListComponent.prototype.onSubmit = function () {
                    ///   this._shopListService.insertItems(this.item); - we can't use this.item we should use new object
                    // otherwise cuase this.item its ref to object every new data will be the same because of  2WDB - data change everywhere in sameway
                    // with the same ref
                    this._shopListService.insertItems({ name: this.item.name, amount: this.item.amount });
                };
                // set myForm here
                ShoppingNewListComponent.prototype.ngOnInit = function () {
                    // call method group of FormBuilder via refernce _formBuilder and put there
                    // my forms (inputs or elements)which I'm going to check
                    this.myForm = this._formBuilder.group({
                        'itemName': [' ', common_1.Validators.required],
                        'itemAmount': [' ', common_1.Validators.compose([
                                common_1.Validators.required,
                                greaterthanZero
                            ])],
                    });
                };
                ShoppingNewListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-new-list-item',
                        template: "\n <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n <div class=\"input\">\n   <label for=\"item-name\">Name</label>\n   <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\">\n </div>\n <div class=\"input\">\n   <label for=\"item-amt\">Amount</label>\n   <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\">\n </div>\n <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Item!</button>\n </form>\n\n "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingNewListComponent);
                return ShoppingNewListComponent;
            }());
            exports_1("ShoppingNewListComponent", ShoppingNewListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFxREEsdUNBQXVDO0lBQ3ZDLHlCQUF5QixPQUFnQjtRQUN2Qyx5REFBeUQ7UUFDekQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztZQW5DRDtnQkFLRSxrQ0FBa0M7Z0JBQ2xDLGtDQUFvQixnQkFBb0MsRUFBVSxZQUF5QjtvQkFBdkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFMN0YsWUFBWTtvQkFDVixTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFJZ0UsQ0FBQztnQkFFaEcsOEhBQThIO2dCQUM5SCwyQ0FBUSxHQUFSO29CQUNFLHFHQUFxRztvQkFDckcsbUlBQW1JO29CQUNwSSxvQkFBb0I7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFFSCxrQkFBa0I7Z0JBQ2xCLDJDQUFRLEdBQVI7b0JBQ0UsMkVBQTJFO29CQUMzRSx3REFBd0Q7b0JBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQy9CLFVBQVUsRUFBQyxDQUFDLEdBQUcsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDckMsWUFBWSxFQUFDLENBQUMsR0FBRyxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNsQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLGVBQWU7NkJBQ2xCLENBQUMsQ0FBQztxQkFDUixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkE5Q0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUMsd0JBQXdCO3dCQUNqQyxRQUFRLEVBQUUsMmhCQWFUO3FCQUVELENBQUM7OzRDQUFBO2dCQThCRiwrQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsK0RBNEJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1uZXctaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtDb21wb25lbnQsIE9uSW5pdH1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19ZnJvbSAnLi9saXN0SXRlbSc7XG5pbXBvcnR7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0e0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2x9ZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gc2VsZWN0b3I6J3Nob3BwaW5nLW5ldy1saXN0LWl0ZW0nLFxuIHRlbXBsYXRlOiBgXG4gPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydpdGVtTmFtZSddXCI+XG4gPC9kaXY+XG4gPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2l0ZW1BbW91bnQnXVwiPlxuIDwvZGl2PlxuIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+QWRkIEl0ZW0hPC9idXR0b24+XG4gPC9mb3JtPlxuXG4gYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdOZXdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuLy8ganMgb2JqZWN0XG4gIGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07XG4gIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gIC8vIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGNvbXBvbmVudHNcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcExpc3RTZXJ2aWNlOlNob3BwaW5nTGlzdFNlcnZpY2UsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcil7fVxuXG4vLyBieSBjbGlja2luZyB3ZSBmaXJlIHRoaXMgZnVuY3Rpb24gd2hpY2ggcGFzcyB0aGlzLml0ZW0gdG8gd2hvZXZlciBiZSBhYmxlIGNhdGNoIHRoaXMgZXZlbnQgKGluIG91ciBzaG9wcGluZy1saXN0IGNvbXBvbmVudClcbm9uU3VibWl0KCl7XG4gIC8vLyAgIHRoaXMuX3Nob3BMaXN0U2VydmljZS5pbnNlcnRJdGVtcyh0aGlzLml0ZW0pOyAtIHdlIGNhbid0IHVzZSB0aGlzLml0ZW0gd2Ugc2hvdWxkIHVzZSBuZXcgb2JqZWN0XG4gIC8vIG90aGVyd2lzZSBjdWFzZSB0aGlzLml0ZW0gaXRzIHJlZiB0byBvYmplY3QgZXZlcnkgbmV3IGRhdGEgd2lsbCBiZSB0aGUgc2FtZSBiZWNhdXNlIG9mICAyV0RCIC0gZGF0YSBjaGFuZ2UgZXZlcnl3aGVyZSBpbiBzYW1ld2F5XG4gLy8gd2l0aCB0aGUgc2FtZSByZWZcbiAgdGhpcy5fc2hvcExpc3RTZXJ2aWNlLmluc2VydEl0ZW1zKHtuYW1lOiB0aGlzLml0ZW0ubmFtZSwgYW1vdW50OiB0aGlzLml0ZW0uYW1vdW50fSk7XG4gIH1cblxuLy8gc2V0IG15Rm9ybSBoZXJlXG5uZ09uSW5pdCgpOmFueXtcbiAgLy8gY2FsbCBtZXRob2QgZ3JvdXAgb2YgRm9ybUJ1aWxkZXIgdmlhIHJlZmVybmNlIF9mb3JtQnVpbGRlciBhbmQgcHV0IHRoZXJlXG4gIC8vIG15IGZvcm1zIChpbnB1dHMgb3IgZWxlbWVudHMpd2hpY2ggSSdtIGdvaW5nIHRvIGNoZWNrXG4gIHRoaXMubXlGb3JtID10aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICdpdGVtTmFtZSc6WycgJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICdpdGVtQW1vdW50JzpbJyAnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIGdyZWF0ZXJ0aGFuWmVyb1xuICAgICAgICBdKV0sXG4gIH0pO1xufVxufVxuLy8gYWRkaXRpb25hbCBmaWx0ZXIgd2hpY2ggSSd2ZSBjcmVhdGVkXG5mdW5jdGlvbiBncmVhdGVydGhhblplcm8oY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOiBib29sZWFufXtcbiAgLy8gd2UgcmV0dXJuIGVycm9yIHRoYXQgdmFsdWUgbGVzcyB0aGFuIHplcm8gaWYgdmFsdWUgPCAwXG4gIGlmKGNvbnRyb2wudmFsdWUgPD0gMCl7XG4gICAgcmV0dXJuIHtsZXNzVGhhblplcm86IHRydWV9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

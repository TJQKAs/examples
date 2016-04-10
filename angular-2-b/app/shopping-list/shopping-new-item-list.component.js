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
                        // default validator
                        'itemName': [' ', common_1.Validators.required],
                        'itemAmount': [' ', common_1.Validators.compose([
                                common_1.Validators.required,
                                // validator which we've made
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUF1REEsdUNBQXVDO0lBQ3ZDLHlCQUF5QixPQUFnQjtRQUN2Qyx5REFBeUQ7UUFDekQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztZQXJDRDtnQkFLRSxrQ0FBa0M7Z0JBQ2xDLGtDQUFvQixnQkFBb0MsRUFBVSxZQUF5QjtvQkFBdkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFMN0YsWUFBWTtvQkFDVixTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFJZ0UsQ0FBQztnQkFFaEcsOEhBQThIO2dCQUM5SCwyQ0FBUSxHQUFSO29CQUNFLHFHQUFxRztvQkFDckcsbUlBQW1JO29CQUNwSSxvQkFBb0I7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFFSCxrQkFBa0I7Z0JBQ2xCLDJDQUFRLEdBQVI7b0JBQ0UsMkVBQTJFO29CQUMzRSx3REFBd0Q7b0JBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ25DLG9CQUFvQjt3QkFDaEIsVUFBVSxFQUFDLENBQUMsR0FBRyxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxZQUFZLEVBQUMsQ0FBQyxHQUFHLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsNkJBQTZCO2dDQUM3QixlQUFlOzZCQUNsQixDQUFDLENBQUM7cUJBQ1IsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBaEREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFDLHdCQUF3Qjt3QkFDakMsUUFBUSxFQUFFLDJoQkFhVDtxQkFFRCxDQUFDOzs0Q0FBQTtnQkFnQ0YsK0JBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELCtEQThCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7Q29tcG9uZW50LCBPbkluaXR9ZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfWZyb20gJy4vbGlzdEl0ZW0nO1xuaW1wb3J0e1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4vc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcbmltcG9ydHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sfWZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOidzaG9wcGluZy1uZXctbGlzdC1pdGVtJyxcbiB0ZW1wbGF0ZTogYFxuIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbU5hbWUnXVwiPlxuIDwvZGl2PlxuIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydpdGVtQW1vdW50J11cIj5cbiA8L2Rpdj5cbiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPkFkZCBJdGVtITwvYnV0dG9uPlxuIDwvZm9ybT5cblxuIGBcblxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTmV3TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbi8vIGpzIG9iamVjdFxuICBpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xuICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICAvLyBjcmVhdGUgcmVmZXJlbmNlcyB0byBjb21wb25lbnRzXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BMaXN0U2VydmljZTpTaG9wcGluZ0xpc3RTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpe31cblxuLy8gYnkgY2xpY2tpbmcgd2UgZmlyZSB0aGlzIGZ1bmN0aW9uIHdoaWNoIHBhc3MgdGhpcy5pdGVtIHRvIHdob2V2ZXIgYmUgYWJsZSBjYXRjaCB0aGlzIGV2ZW50IChpbiBvdXIgc2hvcHBpbmctbGlzdCBjb21wb25lbnQpXG5vblN1Ym1pdCgpe1xuICAvLy8gICB0aGlzLl9zaG9wTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXModGhpcy5pdGVtKTsgLSB3ZSBjYW4ndCB1c2UgdGhpcy5pdGVtIHdlIHNob3VsZCB1c2UgbmV3IG9iamVjdFxuICAvLyBvdGhlcndpc2UgY3Vhc2UgdGhpcy5pdGVtIGl0cyByZWYgdG8gb2JqZWN0IGV2ZXJ5IG5ldyBkYXRhIHdpbGwgYmUgdGhlIHNhbWUgYmVjYXVzZSBvZiAgMldEQiAtIGRhdGEgY2hhbmdlIGV2ZXJ5d2hlcmUgaW4gc2FtZXdheVxuIC8vIHdpdGggdGhlIHNhbWUgcmVmXG4gIHRoaXMuX3Nob3BMaXN0U2VydmljZS5pbnNlcnRJdGVtcyh7bmFtZTogdGhpcy5pdGVtLm5hbWUsIGFtb3VudDogdGhpcy5pdGVtLmFtb3VudH0pO1xuICB9XG5cbi8vIHNldCBteUZvcm0gaGVyZVxubmdPbkluaXQoKTphbnl7XG4gIC8vIGNhbGwgbWV0aG9kIGdyb3VwIG9mIEZvcm1CdWlsZGVyIHZpYSByZWZlcm5jZSBfZm9ybUJ1aWxkZXIgYW5kIHB1dCB0aGVyZVxuICAvLyBteSBmb3JtcyAoaW5wdXRzIG9yIGVsZW1lbnRzKXdoaWNoIEknbSBnb2luZyB0byBjaGVja1xuICB0aGlzLm15Rm9ybSA9dGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIC8vIGRlZmF1bHQgdmFsaWRhdG9yXG4gICAgICAgICdpdGVtTmFtZSc6WycgJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICdpdGVtQW1vdW50JzpbJyAnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIC8vIHZhbGlkYXRvciB3aGljaCB3ZSd2ZSBtYWRlXG4gICAgICAgICAgICBncmVhdGVydGhhblplcm9cbiAgICAgICAgXSldLFxuICB9KTtcbn1cbn1cbi8vIGFkZGl0aW9uYWwgZmlsdGVyIHdoaWNoIEkndmUgY3JlYXRlZFxuZnVuY3Rpb24gZ3JlYXRlcnRoYW5aZXJvKGNvbnRyb2w6IENvbnRyb2wpOntbczogc3RyaW5nXTogYm9vbGVhbn17XG4gIC8vIHdlIHJldHVybiBlcnJvciB0aGF0IHZhbHVlIGxlc3MgdGhhbiB6ZXJvIGlmIHZhbHVlIDwgMFxuICBpZihjb250cm9sLnZhbHVlIDw9IDApe1xuICAgIHJldHVybiB7bGVzc1RoYW5aZXJvOiB0cnVlfTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

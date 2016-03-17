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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Bill';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        // here we make all configuration of our component
                        selector: 'my-component',
                        template: "\n  <h1>this is my component!</h1>\n  Hi my name is {{name}}, this my first app ,<span [class.is-awesome]=\"inputElement.value=== 'yes' \"> I think it's very nice</span>\n     <br/><br/>\n     Am I rigth?\n     <input type=\"text\" #inputElement (keyup)=\"0\">",
                        styleUrls: ['src/css/component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUksTUFBTSxDQUFDO2dCQUNuQixDQUFDO2dCQWREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1Qsa0RBQWtEO3dCQUNsRCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHNRQUt1Qzt3QkFDOUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7cUJBQ3hDLENBQUM7O3dDQUFBO2dCQUlGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGFsbG93IHVzIHRvIHVzZSBjb21wb25lbnQgIGRlY29yYXRvclxuaW1wb3J0e0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgLy8gaGVyZSB3ZSBtYWtlIGFsbCBjb25maWd1cmF0aW9uIG9mIG91ciBjb21wb25lbnRcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICA8aDE+dGhpcyBpcyBteSBjb21wb25lbnQhPC9oMT5cbiAgSGkgbXkgbmFtZSBpcyB7e25hbWV9fSwgdGhpcyBteSBmaXJzdCBhcHAgLDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZT09PSAneWVzJyBcIj4gSSB0aGluayBpdCdzIHZlcnkgbmljZTwvc3Bhbj5cbiAgICAgPGJyLz48YnIvPlxuICAgICBBbSBJIHJpZ3RoP1xuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+YCxcbiAgICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvY29tcG9uZW50LmNzcyddXG59KVxuLy8gaSdtIGdvaW5nIHRvIGV4cG9ydCB0aGlzIGNsYXNzIGFuZCB1c2UgaXQgb3V0c2lkZVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IHtcbiAgICBuYW1lICA9ICdCaWxsJztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

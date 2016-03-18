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
                        // we put in span condition which use css class is-awesome  in case we answer 'yes'
                        // in template we can observe various directives - style directives with condition of name color
                        // directive for button disability  which depends on condition inputElement 
                        template: "\n  <h1>this is my component!</h1>\n  Hi my name is <span [style.color]=\"inputElement.value==='yes' ? 'cyan' : 'green'\">{{name}}</span>, this my first app ,<span [class.is-awesome]= \"inputElement.value=== 'yes' \"  [class.is-aweful]= \"inputElement.value=== 'no' \"    > I think it's very nice</span>\n     <br/><br/>\n     Am I rigth?\n     <input type=\"text\" #inputElement (keyup)=\"0\">\n     <br/>\n     <br/>\n     <button [disabled]=\"inputElement.value  === 'yes'\">only if I type yes</button>",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFJLE1BQU0sQ0FBQztnQkFDbkIsQ0FBQztnQkFwQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxrREFBa0Q7d0JBQ2xELFFBQVEsRUFBRSxjQUFjO3dCQUN4QixtRkFBbUY7d0JBQ25GLGdHQUFnRzt3QkFDaEcsNEVBQTRFO3dCQUM1RSxRQUFRLEVBQUUsMmZBUXdFO3dCQUMvRSxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDMUMsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoibXktY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgYWxsb3cgdXMgdG8gdXNlIGNvbXBvbmVudCAgZGVjb3JhdG9yXG5pbXBvcnR7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICAvLyBoZXJlIHdlIG1ha2UgYWxsIGNvbmZpZ3VyYXRpb24gb2Ygb3VyIGNvbXBvbmVudFxuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXG4gIC8vIHdlIHB1dCBpbiBzcGFuIGNvbmRpdGlvbiB3aGljaCB1c2UgY3NzIGNsYXNzIGlzLWF3ZXNvbWUgIGluIGNhc2Ugd2UgYW5zd2VyICd5ZXMnXG4gIC8vIGluIHRlbXBsYXRlIHdlIGNhbiBvYnNlcnZlIHZhcmlvdXMgZGlyZWN0aXZlcyAtIHN0eWxlIGRpcmVjdGl2ZXMgd2l0aCBjb25kaXRpb24gb2YgbmFtZSBjb2xvclxuICAvLyBkaXJlY3RpdmUgZm9yIGJ1dHRvbiBkaXNhYmlsaXR5ICB3aGljaCBkZXBlbmRzIG9uIGNvbmRpdGlvbiBpbnB1dEVsZW1lbnQgXG4gIHRlbXBsYXRlOiBgXG4gIDxoMT50aGlzIGlzIG15IGNvbXBvbmVudCE8L2gxPlxuICBIaSBteSBuYW1lIGlzIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJyA/ICdjeWFuJyA6ICdncmVlbidcIj57e25hbWV9fTwvc3Bhbj4sIHRoaXMgbXkgZmlyc3QgYXBwICw8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09IFwiaW5wdXRFbGVtZW50LnZhbHVlPT09ICd5ZXMnIFwiICBbY2xhc3MuaXMtYXdlZnVsXT0gXCJpbnB1dEVsZW1lbnQudmFsdWU9PT0gJ25vJyBcIiAgICA+IEkgdGhpbmsgaXQncyB2ZXJ5IG5pY2U8L3NwYW4+XG4gICAgIDxici8+PGJyLz5cbiAgICAgQW0gSSByaWd0aD9cbiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgICA8YnIvPlxuICAgICA8YnIvPlxuICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJpbnB1dEVsZW1lbnQudmFsdWUgID09PSAneWVzJ1wiPm9ubHkgaWYgSSB0eXBlIHllczwvYnV0dG9uPmAsXG4gICAgIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuLy8gaSdtIGdvaW5nIHRvIGV4cG9ydCB0aGlzIGNsYXNzIGFuZCB1c2UgaXQgb3V0c2lkZVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IHtcbiAgICBuYW1lICA9ICdCaWxsJztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

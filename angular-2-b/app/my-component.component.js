System.register(['angular2/core', "./test.component"], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                // I should implement the method which interface requires to imp
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "John";
                    this.age = 45;
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        // here we make all configuration of our component
                        selector: 'my-component',
                        // we put in span condition which use css class is-awesome  in case we answer 'yes'
                        // in template we can observe various directives - style directives with condition of name color
                        // directive for button disability  which depends on condition inputElement
                        // we can put everything <elem [directive]="something expression something">something</elem>
                        template: "\n  <h1>this is my component!</h1>\n  Hi my name is <span [style.color]=\"inputElement.value==='yes' ? 'cyan' : 'green'\">{{name}}</span> I'm  {{age}}, this my first app ,<span [class.is-awesome]= \"inputElement.value=== 'yes' \"  [class.is-aweful]= \"inputElement.value=== 'no' \"    > I think it's very nice</span>\n     <br/><br/>\n     Am I rigth?\n     <input type=\"text\" #inputElement (keyup)=\"0\">\n     <br/>\n     <br/>\n     <button [disabled]=\"inputElement.value  === 'yes'\">only if I type yes</button>\n     <test></test> ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7Z0JBUUEsQ0FBQztnQkFMRyxnRUFBZ0U7Z0JBQ2hFLHVDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQTVCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULGtEQUFrRDt3QkFDbEQsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLG1GQUFtRjt3QkFDbkYsZ0dBQWdHO3dCQUNoRywyRUFBMkU7d0JBQzNFLDRGQUE0Rjt3QkFDNUYsUUFBUSxFQUFFLDZoQkFTUTt3QkFDZixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDdEMsVUFBVSxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDL0IsQ0FBQzs7d0NBQUE7Z0JBVUYsMkJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHVEQVFDLENBQUEiLCJmaWxlIjoibXktY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgYWxsb3cgdXMgdG8gdXNlIGNvbXBvbmVudCAgZGVjb3JhdG9yXG5pbXBvcnR7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8vIGFsbG93IHVzIGZpcmUgc29tZXRoaW5nIHdoZW4gY29tcG9uZW50IHJlYWR5IHRvIGFjdCBvciBkb3dubG9hZFxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy93ZSB3b3VsZG4ndCBoYXZlIGZvdW5kIGRpcmVjdGl2ZSBUZXN0Q29tcG9uZW50IGlmIHdlIGhhZG4ndCBpbXBvcnRlZCBpdCBiZWZvcmUgYnkgZXhwcmVzc2lvbiBiZWxvd1xuaW1wb3J0e1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAvLyBoZXJlIHdlIG1ha2UgYWxsIGNvbmZpZ3VyYXRpb24gb2Ygb3VyIGNvbXBvbmVudFxuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXG4gIC8vIHdlIHB1dCBpbiBzcGFuIGNvbmRpdGlvbiB3aGljaCB1c2UgY3NzIGNsYXNzIGlzLWF3ZXNvbWUgIGluIGNhc2Ugd2UgYW5zd2VyICd5ZXMnXG4gIC8vIGluIHRlbXBsYXRlIHdlIGNhbiBvYnNlcnZlIHZhcmlvdXMgZGlyZWN0aXZlcyAtIHN0eWxlIGRpcmVjdGl2ZXMgd2l0aCBjb25kaXRpb24gb2YgbmFtZSBjb2xvclxuICAvLyBkaXJlY3RpdmUgZm9yIGJ1dHRvbiBkaXNhYmlsaXR5ICB3aGljaCBkZXBlbmRzIG9uIGNvbmRpdGlvbiBpbnB1dEVsZW1lbnRcbiAgLy8gd2UgY2FuIHB1dCBldmVyeXRoaW5nIDxlbGVtIFtkaXJlY3RpdmVdPVwic29tZXRoaW5nIGV4cHJlc3Npb24gc29tZXRoaW5nXCI+c29tZXRoaW5nPC9lbGVtPlxuICB0ZW1wbGF0ZTogYFxuICA8aDE+dGhpcyBpcyBteSBjb21wb25lbnQhPC9oMT5cbiAgSGkgbXkgbmFtZSBpcyA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3llcycgPyAnY3lhbicgOiAnZ3JlZW4nXCI+e3tuYW1lfX08L3NwYW4+IEknbSAge3thZ2V9fSwgdGhpcyBteSBmaXJzdCBhcHAgLDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT0gXCJpbnB1dEVsZW1lbnQudmFsdWU9PT0gJ3llcycgXCIgIFtjbGFzcy5pcy1hd2VmdWxdPSBcImlucHV0RWxlbWVudC52YWx1ZT09PSAnbm8nIFwiICAgID4gSSB0aGluayBpdCdzIHZlcnkgbmljZTwvc3Bhbj5cbiAgICAgPGJyLz48YnIvPlxuICAgICBBbSBJIHJpZ3RoP1xuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+XG4gICAgIDxici8+XG4gICAgIDxici8+XG4gICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAgPT09ICd5ZXMnXCI+b25seSBpZiBJIHR5cGUgeWVzPC9idXR0b24+XG4gICAgIDx0ZXN0PjwvdGVzdD4gYCxcbiAgICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgIGRpcmVjdGl2ZXM6IFtUZXN0Q29tcG9uZW50XVxufSlcbi8vIGknbSBnb2luZyB0byBleHBvcnQgdGhpcyBjbGFzcyBhbmQgdXNlIGl0IG91dHNpZGVcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xuICAgIG5hbWU6ICBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgLy8gSSBzaG91bGQgaW1wbGVtZW50IHRoZSBtZXRob2Qgd2hpY2ggaW50ZXJmYWNlIHJlcXVpcmVzIHRvIGltcFxuICAgIG5nT25Jbml0KCkgOmFueXtcbiAgICAgIHRoaXMubmFtZSA9IFwiSm9oblwiO1xuICAgICAgdGhpcy5hZ2UgPSA0NTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

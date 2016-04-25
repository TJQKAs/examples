System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                // we should use routing object that's why we should inject Router
                function Component2Component(_router) {
                    this._router = _router;
                }
                // method which we call by clicking button
                Component2Component.prototype.onNavigate = function () {
                    //here call method navigate from Router via _router and set argument - where we are going to go
                    this._router.navigate(['Component1', { source: 'Component2' }]);
                };
                // method of lifecycle interface with 2 arg(next - what we gonna do and previous instruction)
                Component2Component.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    return confirm("Yes or Not");
                };
                Component2Component = __decorate([
                    core_1.Component({
                        //  selector: "",
                        template: "\n     <h3>This is Component 2</h3>\n     <button (click)=\"onNavigate()\">Turn me back to Component1</button>\n   "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0Esa0VBQWtFO2dCQUNsRSw2QkFBcUIsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7Z0JBQUUsQ0FBQztnQkFFeEMsMENBQTBDO2dCQUN6Qyx3Q0FBVSxHQUFWO29CQUNFLCtGQUErRjtvQkFDL0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUNELDZGQUE2RjtnQkFDN0YsaURBQW1CLEdBQW5CLFVBQW9CLGVBQW9DLEVBQUUsZUFBb0M7b0JBQzVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBdEJGO29CQUFDLGdCQUFTLENBQUM7d0JBRVQsaUJBQWlCO3dCQUNoQixRQUFRLEVBQUUscUhBR1Q7cUJBRUgsQ0FBQzs7dUNBQUE7Z0JBZUYsMEJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHFEQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH1mcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtSb3V0ZXIsIENhbkRlYWN0aXZhdGUsIENvbXBvbmVudEluc3RydWN0aW9ufWZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXG4gIC8vICBzZWxlY3RvcjogXCJcIixcbiAgIHRlbXBsYXRlOiBgXG4gICAgIDxoMz5UaGlzIGlzIENvbXBvbmVudCAyPC9oMz5cbiAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25OYXZpZ2F0ZSgpXCI+VHVybiBtZSBiYWNrIHRvIENvbXBvbmVudDE8L2J1dHRvbj5cbiAgIGBcblxufSlcbi8vIENhbkRlYWN0aXZlIC0gbGlmZWN5Y2xlIGludGVyZmFjZVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDJDb21wb25lbnQgaW1wbGVtZW50cyBDYW5EZWFjdGl2YXRle1xuLy8gd2Ugc2hvdWxkIHVzZSByb3V0aW5nIG9iamVjdCB0aGF0J3Mgd2h5IHdlIHNob3VsZCBpbmplY3QgUm91dGVyXG5jb25zdHJ1Y3Rvcihwcml2YXRlICBfcm91dGVyOiAgUm91dGVyKXt9XG5cbi8vIG1ldGhvZCB3aGljaCB3ZSBjYWxsIGJ5IGNsaWNraW5nIGJ1dHRvblxuIG9uTmF2aWdhdGUoKXtcbiAgIC8vaGVyZSBjYWxsIG1ldGhvZCBuYXZpZ2F0ZSBmcm9tIFJvdXRlciB2aWEgX3JvdXRlciBhbmQgc2V0IGFyZ3VtZW50IC0gd2hlcmUgd2UgYXJlIGdvaW5nIHRvIGdvXG4gICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb21wb25lbnQxJywge3NvdXJjZTogJ0NvbXBvbmVudDInfV0pO1xuIH1cbiAvLyBtZXRob2Qgb2YgbGlmZWN5Y2xlIGludGVyZmFjZSB3aXRoIDIgYXJnKG5leHQgLSB3aGF0IHdlIGdvbm5hIGRvIGFuZCBwcmV2aW91cyBpbnN0cnVjdGlvbilcbiByb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjpDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldkluc3RydWN0aW9uOkNvbXBvbmVudEluc3RydWN0aW9uKTphbnl7XG4gICByZXR1cm4gY29uZmlybShcIlllcyBvciBOb3RcIik7XG4gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

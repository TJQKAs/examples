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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0Esa0VBQWtFO2dCQUNsRSw2QkFBcUIsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7Z0JBQUUsQ0FBQztnQkFFeEMsMENBQTBDO2dCQUN6Qyx3Q0FBVSxHQUFWO29CQUNFLCtGQUErRjtvQkFDL0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQWxCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUVULGlCQUFpQjt3QkFDaEIsUUFBUSxFQUFFLHFIQUdUO3FCQUVILENBQUM7O3VDQUFBO2dCQVdGLDBCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxxREFTQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9ZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnR7Um91dGVyfWZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXG4gIC8vICBzZWxlY3RvcjogXCJcIixcbiAgIHRlbXBsYXRlOiBgXG4gICAgIDxoMz5UaGlzIGlzIENvbXBvbmVudCAyPC9oMz5cbiAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25OYXZpZ2F0ZSgpXCI+VHVybiBtZSBiYWNrIHRvIENvbXBvbmVudDE8L2J1dHRvbj5cbiAgIGBcblxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDJDb21wb25lbnR7XG4vLyB3ZSBzaG91bGQgdXNlIHJvdXRpbmcgb2JqZWN0IHRoYXQncyB3aHkgd2Ugc2hvdWxkIGluamVjdCBSb3V0ZXJcbmNvbnN0cnVjdG9yKHByaXZhdGUgIF9yb3V0ZXI6ICBSb3V0ZXIpe31cblxuLy8gbWV0aG9kIHdoaWNoIHdlIGNhbGwgYnkgY2xpY2tpbmcgYnV0dG9uXG4gb25OYXZpZ2F0ZSgpe1xuICAgLy9oZXJlIGNhbGwgbWV0aG9kIG5hdmlnYXRlIGZyb20gUm91dGVyIHZpYSBfcm91dGVyIGFuZCBzZXQgYXJndW1lbnQgLSB3aGVyZSB3ZSBhcmUgZ29pbmcgdG8gZ29cbiAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbXBvbmVudDEnLCB7c291cmNlOiAnQ29tcG9uZW50Mid9XSk7XG4gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

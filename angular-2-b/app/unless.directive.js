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
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    // specify what happens if  this input get set
                    //  if condition is false // condition is what ever we typed  between quotation marks with tag #condition
                    set: function (condition) {
                        if (!condition) {
                            // we want access to _viewContainerRef and tell him to create embeded view which should includes template
                            // in our case it will be  "Only shown if 'false' was typed"
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            // otherwise we wonna clear this container
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: ['myUnless']
                    }), 
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFDRSx5QkFBb0IsWUFBeUIsRUFBVSxpQkFBbUM7b0JBQXRFLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Z0JBQUUsQ0FBQztnQkFHNUYsc0JBQUkscUNBQVE7b0JBRmQsOENBQThDO29CQUM5Qyx5R0FBeUc7eUJBQ3ZHLFVBQWEsU0FBa0I7d0JBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQzs0QkFDYix5R0FBeUc7NEJBQ3pHLDREQUE0RDs0QkFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDL0QsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTiwwQ0FBMEM7NEJBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDakMsQ0FBQztvQkFDSCxDQUFDOzs7bUJBQUE7Z0JBbEJKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztxQkFDckIsQ0FBQzs7bUNBQUE7Z0JBZ0JGLHNCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCw2Q0FjQyxDQUFBIiwiZmlsZSI6InVubGVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXlVbmxlc3NdJyxcbiAgaW5wdXRzOiBbJ215VW5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBVbmxlc3NEaXJlY3RpdmV7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZiwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZil7fVxuIC8vIHNwZWNpZnkgd2hhdCBoYXBwZW5zIGlmICB0aGlzIGlucHV0IGdldCBzZXRcbiAvLyAgaWYgY29uZGl0aW9uIGlzIGZhbHNlIC8vIGNvbmRpdGlvbiBpcyB3aGF0IGV2ZXIgd2UgdHlwZWQgIGJldHdlZW4gcXVvdGF0aW9uIG1hcmtzIHdpdGggdGFnICNjb25kaXRpb25cbiAgIHNldCBteVVubGVzcyhjb25kaXRpb246IGJvb2xlYW4pe1xuICAgICBpZighY29uZGl0aW9uKXtcbiAgICAgICAvLyB3ZSB3YW50IGFjY2VzcyB0byBfdmlld0NvbnRhaW5lclJlZiBhbmQgdGVsbCBoaW0gdG8gY3JlYXRlIGVtYmVkZWQgdmlldyB3aGljaCBzaG91bGQgaW5jbHVkZXMgdGVtcGxhdGVcbiAgICAgICAvLyBpbiBvdXIgY2FzZSBpdCB3aWxsIGJlICBcIk9ubHkgc2hvd24gaWYgJ2ZhbHNlJyB3YXMgdHlwZWRcIlxuICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAvLyBvdGhlcndpc2Ugd2Ugd29ubmEgY2xlYXIgdGhpcyBjb250YWluZXJcbiAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgIH1cbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

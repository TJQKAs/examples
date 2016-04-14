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
    var FilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilterPipe = (function () {
                function FilterPipe() {
                }
                // ListItem contains data which we should check
                FilterPipe.prototype.transform = function (value, args) {
                    // check if list empty becuase in this case there is nothing to check
                    if (value.length === 0) {
                        return value;
                    }
                    // otherwise pass data throug filter and return result in resultArray
                    var resultArray = [];
                    // for each item in value array which we've got pass through filter
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var item = value_1[_i];
                        if (item.name.match('^.*' + args[0] + '.*$')) {
                            resultArray.push(item);
                        }
                        return resultArray;
                    }
                };
                FilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'myFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterPipe);
                return FilterPipe;
            }());
            exports_1("FilterPipe", FilterPipe);
        }
    }
});
//# sourceMappingURL=filter.pipe.js.map
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // find tag in html with the name my-app and execute the code below in
                        selector: 'my-app',
                        //  we set class puzzle everywhere, and class solved depending on whether input values are equals to switchNumbers or not
                        template: "\n       <section class=\"setup\">\n       <h2>Game Setup</h2>\n               Enter your name dude:\n             <input type=\"text\" #name (keyup)=\"0\">\n       </section>\n       <section\n       [ngClass]=\"{\n         puzzle: true,\n         solved: switch1.value == switchNumber1 && switch2.value ==\n         switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n         switchNumber4\n       }\"\n\n\n       [style.display]=\"name.value === '' ? 'none' : 'block' \">\n         <h2>The Puzzle!</h2>\n         <p>Welcome to the game<span class=\"name\">XXX</span></p>\n         <br/>\n         Switch 1:\n         <input type=\"text\" #switch1><br/>\n         Switch 2:\n         <input type=\"text\" #switch2><br/>\n         Switch 3:\n         <input type=\"text\" #switch3><br/>\n         Switch 4:\n         <input type=\"text\" #switch4><br/>\n       </section>\n       <h2>Congrats XXX!  you did it</h2>\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQ0E7Z0JBQUE7Z0JBS0EsQ0FBQztnQkE3Q0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxzRUFBc0U7d0JBQ3BFLFFBQVEsRUFBRSxRQUFRO3dCQUVwQix5SEFBeUg7d0JBQ3ZILFFBQVEsRUFBRSwrNkJBOEJUO3FCQUdKLENBQUM7O2dDQUFBO2dCQU9GLG1CQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx1Q0FLQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBmaW5kIHRhZyBpbiBodG1sIHdpdGggdGhlIG5hbWUgbXktYXBwIGFuZCBleGVjdXRlIHRoZSBjb2RlIGJlbG93IGluXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuXG4gIC8vICB3ZSBzZXQgY2xhc3MgcHV6emxlIGV2ZXJ5d2hlcmUsIGFuZCBjbGFzcyBzb2x2ZWQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaW5wdXQgdmFsdWVzIGFyZSBlcXVhbHMgdG8gc3dpdGNoTnVtYmVycyBvciBub3RcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICA8aDI+R2FtZSBTZXR1cDwvaDI+XG4gICAgICAgICAgICAgICBFbnRlciB5b3VyIG5hbWUgZHVkZTpcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICA8c2VjdGlvblxuICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgIHB1enpsZTogdHJ1ZSxcbiAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIxICYmIHN3aXRjaDIudmFsdWUgPT1cbiAgICAgICAgIHN3aXRjaE51bWJlcjIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIzICYmIHN3aXRjaDQudmFsdWUgPT1cbiAgICAgICAgIHN3aXRjaE51bWJlcjRcbiAgICAgICB9XCJcblxuXG4gICAgICAgW3N0eWxlLmRpc3BsYXldPVwibmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snIFwiPlxuICAgICAgICAgPGgyPlRoZSBQdXp6bGUhPC9oMj5cbiAgICAgICAgIDxwPldlbGNvbWUgdG8gdGhlIGdhbWU8c3BhbiBjbGFzcz1cIm5hbWVcIj5YWFg8L3NwYW4+PC9wPlxuICAgICAgICAgPGJyLz5cbiAgICAgICAgIFN3aXRjaCAxOlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDE+PGJyLz5cbiAgICAgICAgIFN3aXRjaCAyOlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDI+PGJyLz5cbiAgICAgICAgIFN3aXRjaCAzOlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDM+PGJyLz5cbiAgICAgICAgIFN3aXRjaCA0OlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQ+PGJyLz5cbiAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgPGgyPkNvbmdyYXRzIFhYWCEgIHlvdSBkaWQgaXQ8L2gyPlxuXG4gICAgYCxcblxuXG59KVxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gc3dpdGNoTnVtYmVyMTogbnVtYmVyO1xuIHN3aXRjaE51bWJlcjI6IG51bWJlcjtcbiBzd2l0Y2hOdW1iZXIzOiBudW1iZXI7XG4gc3dpdGNoTnVtYmVyNDogbnVtYmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

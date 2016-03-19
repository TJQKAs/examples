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
                AppComponent.prototype.ngOnInit = function () {
                    this.switchNumber1 = Math.round(Math.random() * 2) + 1;
                    ;
                    this.switchNumber2 = Math.round(Math.random() * 2) + 1;
                    ;
                    this.switchNumber3 = Math.round(Math.random() * 2) + 1;
                    ;
                    this.switchNumber4 = Math.round(Math.random() * 2) + 1;
                    ;
                    console.log(this.switchNumber1, this.switchNumber2, this.switchNumber3, this.switchNumber4);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        // find tag in html with the name my-app and execute the code below in
                        selector: 'my-app',
                        //  we set class puzzle everywhere, and class solved depending on whether input values are equals to switchNumbers or not
                        template: "\n       <section class=\"setup\">\n       <h2>Game Setup</h2>\n               Enter your name dude:\n             <input type=\"text\" #name (keyup)=\"0\">\n       </section>\n       <section\n       [ngClass]=\"{\n         puzzle: true,\n         solved: switch1.value == switchNumber1 && switch2.value ==\n         switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n         switchNumber4\n       }\"\n\n       [style.display]=\"name.value === '' ? 'none' : 'block' \">\n         <h2>The Puzzle | {{switch1.value == switchNumber1 && switch2.value ==  switchNumber2 && switch3.value == switchNumber3 && switch4.value == switchNumber4  ?  'SOLVED'  : 'NOT SOLVED' }}</h2>\n\n         <p>Welcome to the game<span class=\"name\">  {{name.value}}</span></p>\n         <br/>\n         Switch 1:\n         <input type=\"text\" #switch1 (keyup)=\"0\"><br/>\n         Switch 2:\n         <input type=\"text\" #switch2 (keyup)=\"0\"><br/>\n         Switch 3:\n         <input type=\"text\" #switch3 (keyup)=\"0\"><br/>\n         Switch 4:\n         <input type=\"text\" #switch4 (keyup)=\"0\"><br/>\n       </section>\n       <h4 [style.display]=\"switch1.value == switchNumber1 && switch2.value ==\n       switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n       switchNumber4 ? 'block' : 'none' \">Congrats {{name.value}}!  you did it</h4>\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2Q0E7Z0JBQUE7Z0JBYUEsQ0FBQztnQkFQQSwrQkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRyxDQUFDO2dCQXRERjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULHNFQUFzRTt3QkFDcEUsUUFBUSxFQUFFLFFBQVE7d0JBRXBCLHlIQUF5SDt3QkFDdkgsUUFBUSxFQUFFLHEyQ0FnQ1Q7cUJBR0osQ0FBQzs7Z0NBQUE7Z0JBZUYsbUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHVDQWFDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZmluZCB0YWcgaW4gaHRtbCB3aXRoIHRoZSBuYW1lIG15LWFwcCBhbmQgZXhlY3V0ZSB0aGUgY29kZSBiZWxvdyBpblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcblxuICAvLyAgd2Ugc2V0IGNsYXNzIHB1enpsZSBldmVyeXdoZXJlLCBhbmQgY2xhc3Mgc29sdmVkIGRlcGVuZGluZyBvbiB3aGV0aGVyIGlucHV0IHZhbHVlcyBhcmUgZXF1YWxzIHRvIHN3aXRjaE51bWJlcnMgb3Igbm90XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIGR1ZGU6XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgPHNlY3Rpb25cbiAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgICBzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoTnVtYmVyMSAmJiBzd2l0Y2gyLnZhbHVlID09XG4gICAgICAgICBzd2l0Y2hOdW1iZXIyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoTnVtYmVyMyAmJiBzd2l0Y2g0LnZhbHVlID09XG4gICAgICAgICBzd2l0Y2hOdW1iZXI0XG4gICAgICAgfVwiXG5cbiAgICAgICBbc3R5bGUuZGlzcGxheV09XCJuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jaycgXCI+XG4gICAgICAgICA8aDI+VGhlIFB1enpsZSB8IHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIxICYmIHN3aXRjaDIudmFsdWUgPT0gIHN3aXRjaE51bWJlcjIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIzICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoTnVtYmVyNCAgPyAgJ1NPTFZFRCcgIDogJ05PVCBTT0xWRUQnIH19PC9oMj5cblxuICAgICAgICAgPHA+V2VsY29tZSB0byB0aGUgZ2FtZTxzcGFuIGNsYXNzPVwibmFtZVwiPiAge3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuICAgICAgICAgPGJyLz5cbiAgICAgICAgIFN3aXRjaCAxOlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgICAgU3dpdGNoIDI6XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICAgICBTd2l0Y2ggMzpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyLz5cbiAgICAgICAgIFN3aXRjaCA0OlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICA8aDQgW3N0eWxlLmRpc3BsYXldPVwic3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIxICYmIHN3aXRjaDIudmFsdWUgPT1cbiAgICAgICBzd2l0Y2hOdW1iZXIyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoTnVtYmVyMyAmJiBzd2l0Y2g0LnZhbHVlID09XG4gICAgICAgc3dpdGNoTnVtYmVyNCA/ICdibG9jaycgOiAnbm9uZScgXCI+Q29uZ3JhdHMge3tuYW1lLnZhbHVlfX0hICB5b3UgZGlkIGl0PC9oND5cblxuICAgIGAsXG5cblxufSlcbi8vIHRoaXMgb3VyIGRlZmF1bHQgY2xhc3NcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIHN3aXRjaE51bWJlcjE6IG51bWJlcjtcbiBzd2l0Y2hOdW1iZXIyOiBudW1iZXI7XG4gc3dpdGNoTnVtYmVyMzogbnVtYmVyO1xuIHN3aXRjaE51bWJlcjQ6IG51bWJlcjtcblxuIG5nT25Jbml0KCl7XG4gICB0aGlzLnN3aXRjaE51bWJlcjEgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMikrMSk7XG4gICAgdGhpcy5zd2l0Y2hOdW1iZXIyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjIpKzEpO1xuICAgICB0aGlzLnN3aXRjaE51bWJlcjMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMikrMSk7XG4gICAgICB0aGlzLnN3aXRjaE51bWJlcjQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMikrMSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2hOdW1iZXIxLCB0aGlzLnN3aXRjaE51bWJlcjIsIHRoaXMuc3dpdGNoTnVtYmVyMywgdGhpcy5zd2l0Y2hOdW1iZXI0KTtcbiB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

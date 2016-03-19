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
                        template: "\n       <section class=\"setup\">\n       <h2>Game Setup</h2>\n               Enter your name dude:\n             <input type=\"text\" #name (keyup)=\"0\">\n       </section>\n       <section\n       [ngClass]=\"{\n         puzzle: true,\n         solved: switch1.value == switchNumber1 && switch2.value ==\n         switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n         switchNumber4\n       }\"\n\n\n       [style.display]=\"name.value === '' ? 'none' : 'block' \">\n         <h2>The Puzzle | {{switch1.value == switchNumber1 && switch2.value ==  switchNumber2 && switch3.value == switchNumber3 && switch4.value == switchNumber4  ?  'SOLVED'  : 'NOT SOLVED' }}</h2>\n\n         <p>Welcome to the game<span class=\"name\">  {{name.value}}</span></p>\n         <br/>\n         Switch 1:\n         <input type=\"text\" #switch1 (keyup)=\"0\"><br/>\n         Switch 2:\n         <input type=\"text\" #switch2 (keyup)=\"0\"><br/>\n         Switch 3:\n         <input type=\"text\" #switch3 (keyup)=\"0\"><br/>\n         Switch 4:\n         <input type=\"text\" #switch4 (keyup)=\"0\"><br/>\n       </section>\n       <h4 [style.display]=\"switch1.value == switchNumber1 && switch2.value ==\n       switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n       switchNumber4 ? 'block' : 'none' \">Congrats {{name.value}}!  you did it</h4>\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBQUE7Z0JBYUEsQ0FBQztnQkFQQSwrQkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO29CQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRyxDQUFDO2dCQXZERjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULHNFQUFzRTt3QkFDcEUsUUFBUSxFQUFFLFFBQVE7d0JBRXBCLHlIQUF5SDt3QkFDdkgsUUFBUSxFQUFFLHUyQ0FpQ1Q7cUJBR0osQ0FBQzs7Z0NBQUE7Z0JBZUYsbUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHVDQWFDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZmluZCB0YWcgaW4gaHRtbCB3aXRoIHRoZSBuYW1lIG15LWFwcCBhbmQgZXhlY3V0ZSB0aGUgY29kZSBiZWxvdyBpblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcblxuICAvLyAgd2Ugc2V0IGNsYXNzIHB1enpsZSBldmVyeXdoZXJlLCBhbmQgY2xhc3Mgc29sdmVkIGRlcGVuZGluZyBvbiB3aGV0aGVyIGlucHV0IHZhbHVlcyBhcmUgZXF1YWxzIHRvIHN3aXRjaE51bWJlcnMgb3Igbm90XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIGR1ZGU6XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgPHNlY3Rpb25cbiAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgICBzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoTnVtYmVyMSAmJiBzd2l0Y2gyLnZhbHVlID09XG4gICAgICAgICBzd2l0Y2hOdW1iZXIyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoTnVtYmVyMyAmJiBzd2l0Y2g0LnZhbHVlID09XG4gICAgICAgICBzd2l0Y2hOdW1iZXI0XG4gICAgICAgfVwiXG5cblxuICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIm5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJyBcIj5cbiAgICAgICAgIDxoMj5UaGUgUHV6emxlIHwge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaE51bWJlcjEgJiYgc3dpdGNoMi52YWx1ZSA9PSAgc3dpdGNoTnVtYmVyMiAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaE51bWJlcjMgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2hOdW1iZXI0ICA/ICAnU09MVkVEJyAgOiAnTk9UIFNPTFZFRCcgfX08L2gyPlxuXG4gICAgICAgICA8cD5XZWxjb21lIHRvIHRoZSBnYW1lPHNwYW4gY2xhc3M9XCJuYW1lXCI+ICB7e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgICA8YnIvPlxuICAgICAgICAgU3dpdGNoIDE6XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyLz5cbiAgICAgICAgIFN3aXRjaCAzOlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgICAgU3dpdGNoIDQ6XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICAgPC9zZWN0aW9uPlxuICAgICAgIDxoNCBbc3R5bGUuZGlzcGxheV09XCJzd2l0Y2gxLnZhbHVlID09IHN3aXRjaE51bWJlcjEgJiYgc3dpdGNoMi52YWx1ZSA9PVxuICAgICAgIHN3aXRjaE51bWJlcjIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIzICYmIHN3aXRjaDQudmFsdWUgPT1cbiAgICAgICBzd2l0Y2hOdW1iZXI0ID8gJ2Jsb2NrJyA6ICdub25lJyBcIj5Db25ncmF0cyB7e25hbWUudmFsdWV9fSEgIHlvdSBkaWQgaXQ8L2g0PlxuXG4gICAgYCxcblxuXG59KVxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gc3dpdGNoTnVtYmVyMTogbnVtYmVyO1xuIHN3aXRjaE51bWJlcjI6IG51bWJlcjtcbiBzd2l0Y2hOdW1iZXIzOiBudW1iZXI7XG4gc3dpdGNoTnVtYmVyNDogbnVtYmVyO1xuXG4gbmdPbkluaXQoKXtcbiAgIHRoaXMuc3dpdGNoTnVtYmVyMSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyKSsxKTtcbiAgICB0aGlzLnN3aXRjaE51bWJlcjIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMikrMSk7XG4gICAgIHRoaXMuc3dpdGNoTnVtYmVyMyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyKSsxKTtcbiAgICAgIHRoaXMuc3dpdGNoTnVtYmVyNCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyKSsxKTtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaE51bWJlcjEsIHRoaXMuc3dpdGNoTnVtYmVyMiwgdGhpcy5zd2l0Y2hOdW1iZXIzLCB0aGlzLnN3aXRjaE51bWJlcjQpO1xuIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

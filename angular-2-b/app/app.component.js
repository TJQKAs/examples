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
                    this.switchNumber1 = Math.round(Math.random());
                    this.switchNumber2 = Math.round(Math.random());
                    this.switchNumber3 = Math.round(Math.random());
                    this.switchNumber4 = Math.round(Math.random());
                    console.log(this.switchNumber1, this.switchNumber2, this.switchNumber3, this.switchNumber4);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        // find tag in html with the name my-app and execute the code below in
                        selector: 'my-app',
                        //  we set class puzzle everywhere, and class solved depending on whether input values are equals to switchNumbers or not
                        template: "\n       <section class=\"setup\">\n       <h2>Game Setup</h2>\n               Enter your name dude:\n             <input type=\"text\" #name (keyup)=\"0\">\n       </section>\n       <section\n       [ngClass]=\"{\n         puzzle: true,\n         solved: switch1.value == switchNumber1 && switch2.value ==\n         switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n         switchNumber4\n       }\"\n\n\n       [style.display]=\"name.value === '' ? 'none' : 'block' \">\n         <h2>The Puzzle | {{switch1.value == switchNumber1 && switch2.value ==  switchNumber2 && switch3.value == switchNumber3 && switch4.value == switchNumber4  ?  'SOLVED'  : 'NOT SOLVED' }}</h2>\n\n         <p>Welcome to the game<span class=\"name\">{{name.value}}</span></p>\n         <br/>\n         Switch 1:\n         <input type=\"text\" #switch1 (keyup)=\"0\"><br/>\n         Switch 2:\n         <input type=\"text\" #switch2 (keyup)=\"0\"><br/>\n         Switch 3:\n         <input type=\"text\" #switch3 (keyup)=\"0\"><br/>\n         Switch 4:\n         <input type=\"text\" #switch4 (keyup)=\"0\"><br/>\n       </section>\n       <h2 [style.display]=\"switch1.value == switchNumber1 && switch2.value ==\n       switchNumber2 && switch3.value == switchNumber3 && switch4.value ==\n       switchNumber4 ? 'block' : 'none' \">Congrats {{name.value}}!  you did it</h2>\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBQUE7Z0JBYUEsQ0FBQztnQkFQQSwrQkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xHLENBQUM7Z0JBdkRGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1Qsc0VBQXNFO3dCQUNwRSxRQUFRLEVBQUUsUUFBUTt3QkFFcEIseUhBQXlIO3dCQUN2SCxRQUFRLEVBQUUscTJDQWlDVDtxQkFHSixDQUFDOztnQ0FBQTtnQkFlRixtQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsdUNBYUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0e09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBmaW5kIHRhZyBpbiBodG1sIHdpdGggdGhlIG5hbWUgbXktYXBwIGFuZCBleGVjdXRlIHRoZSBjb2RlIGJlbG93IGluXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuXG4gIC8vICB3ZSBzZXQgY2xhc3MgcHV6emxlIGV2ZXJ5d2hlcmUsIGFuZCBjbGFzcyBzb2x2ZWQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaW5wdXQgdmFsdWVzIGFyZSBlcXVhbHMgdG8gc3dpdGNoTnVtYmVycyBvciBub3RcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICA8aDI+R2FtZSBTZXR1cDwvaDI+XG4gICAgICAgICAgICAgICBFbnRlciB5b3VyIG5hbWUgZHVkZTpcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICA8c2VjdGlvblxuICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgIHB1enpsZTogdHJ1ZSxcbiAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIxICYmIHN3aXRjaDIudmFsdWUgPT1cbiAgICAgICAgIHN3aXRjaE51bWJlcjIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIzICYmIHN3aXRjaDQudmFsdWUgPT1cbiAgICAgICAgIHN3aXRjaE51bWJlcjRcbiAgICAgICB9XCJcblxuXG4gICAgICAgW3N0eWxlLmRpc3BsYXldPVwibmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snIFwiPlxuICAgICAgICAgPGgyPlRoZSBQdXp6bGUgfCB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoTnVtYmVyMSAmJiBzd2l0Y2gyLnZhbHVlID09ICBzd2l0Y2hOdW1iZXIyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoTnVtYmVyMyAmJiBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaE51bWJlcjQgID8gICdTT0xWRUQnICA6ICdOT1QgU09MVkVEJyB9fTwvaDI+XG5cbiAgICAgICAgIDxwPldlbGNvbWUgdG8gdGhlIGdhbWU8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgICA8YnIvPlxuICAgICAgICAgU3dpdGNoIDE6XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyLz5cbiAgICAgICAgIFN3aXRjaCAzOlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgICAgU3dpdGNoIDQ6XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICAgPC9zZWN0aW9uPlxuICAgICAgIDxoMiBbc3R5bGUuZGlzcGxheV09XCJzd2l0Y2gxLnZhbHVlID09IHN3aXRjaE51bWJlcjEgJiYgc3dpdGNoMi52YWx1ZSA9PVxuICAgICAgIHN3aXRjaE51bWJlcjIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2hOdW1iZXIzICYmIHN3aXRjaDQudmFsdWUgPT1cbiAgICAgICBzd2l0Y2hOdW1iZXI0ID8gJ2Jsb2NrJyA6ICdub25lJyBcIj5Db25ncmF0cyB7e25hbWUudmFsdWV9fSEgIHlvdSBkaWQgaXQ8L2gyPlxuXG4gICAgYCxcblxuXG59KVxuLy8gdGhpcyBvdXIgZGVmYXVsdCBjbGFzc1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gc3dpdGNoTnVtYmVyMTogbnVtYmVyO1xuIHN3aXRjaE51bWJlcjI6IG51bWJlcjtcbiBzd2l0Y2hOdW1iZXIzOiBudW1iZXI7XG4gc3dpdGNoTnVtYmVyNDogbnVtYmVyO1xuXG4gbmdPbkluaXQoKXtcbiAgIHRoaXMuc3dpdGNoTnVtYmVyMSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgdGhpcy5zd2l0Y2hOdW1iZXIyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgdGhpcy5zd2l0Y2hOdW1iZXIzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgIHRoaXMuc3dpdGNoTnVtYmVyNCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2hOdW1iZXIxLCB0aGlzLnN3aXRjaE51bWJlcjIsIHRoaXMuc3dpdGNoTnVtYmVyMywgdGhpcy5zd2l0Y2hOdW1iZXI0KTtcbiB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

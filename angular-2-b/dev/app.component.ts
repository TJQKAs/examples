import {Component} from 'angular2/core';
import{OnInit} from 'angular2/core';

@Component({
  // find tag in html with the name my-app and execute the code below in
    selector: 'my-app',

  //  we set class puzzle everywhere, and class solved depending on whether input values are equals to switchNumbers or not
    template: `
       <section class="setup">
       <h2>Game Setup</h2>
               Enter your name dude:
             <input type="text" #name (keyup)="0">
       </section>
       <section
       [ngClass]="{
         puzzle: true,
         solved: switch1.value == switchNumber1 && switch2.value ==
         switchNumber2 && switch3.value == switchNumber3 && switch4.value ==
         switchNumber4
       }"


       [style.display]="name.value === '' ? 'none' : 'block' ">
         <h2>The Puzzle | {{switch1.value == switchNumber1 && switch2.value ==  switchNumber2 && switch3.value == switchNumber3 && switch4.value == switchNumber4  ?  'SOLVED'  : 'NOT SOLVED' }}</h2>

         <p>Welcome to the game<span class="name">{{name.value}}</span></p>
         <br/>
         Switch 1:
         <input type="text" #switch1 (keyup)="0"><br/>
         Switch 2:
         <input type="text" #switch2 (keyup)="0"><br/>
         Switch 3:
         <input type="text" #switch3 (keyup)="0"><br/>
         Switch 4:
         <input type="text" #switch4 (keyup)="0"><br/>
       </section>
       <h2 [style.display]="switch1.value == switchNumber1 && switch2.value ==
       switchNumber2 && switch3.value == switchNumber3 && switch4.value ==
       switchNumber4 ? 'block' : 'none' ">Congrats {{name.value}}!  you did it</h2>

    `,


})
// this our default class
export class AppComponent implements OnInit {
 switchNumber1: number;
 switchNumber2: number;
 switchNumber3: number;
 switchNumber4: number;

 ngOnInit(){
   this.switchNumber1 = Math.round(Math.random());
    this.switchNumber2 = Math.round(Math.random());
     this.switchNumber3 = Math.round(Math.random());
      this.switchNumber4 = Math.round(Math.random());
       console.log(this.switchNumber1, this.switchNumber2, this.switchNumber3, this.switchNumber4);
 }
}

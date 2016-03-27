import {Component} from 'angular2/core';

@Component({
  selector: 'my-structural-directives',
  template: `
  <section class="directive">
    <h2>*ngIf Structural directive</h2>
    <div>
      Enter a number between 1 and 50
      <br/>
      <input type="text" #number (keyup)="0">
      </div>
    <div *ngIf="number.value > 0 && number.value < 51">
    <h4 class="underlined">All elements which stand between tags with *ngIf <br/>
    are saw if condition is true </h4>
    Number belongs to the interspace </div>
  </section>
  <section class="directive">
    <h2>*ngFor</h2>
    <div>
      <ul>
        <li class="underlined" *ngFor="#item of list, #i = index">{{item}} - number {{i+1}}</li>
      </ul>
    </div>
  </section>`


  ,
})
export class StructuralDirectives{

    list =  ['Acai','Apple','Apricots','Avocado ','Banana','Blackberry','Blueberries','Cherries','Currents','Cucumber','Goji berries','Durian'] ;

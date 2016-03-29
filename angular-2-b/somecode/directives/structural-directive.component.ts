import {Component} from 'angular2/core';
import{UnlessDirective} from './unless.directive';

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
  </section>
  <section class="directive">
    <h2>[ngSwitch]</h2>
    <div>
      Enter red, yellow or green color
      <br/>
      <input type="text" #color (keyup)="0">
    </div>
    <div [ngSwitch]="color.value">
      <template [ngSwitchWhen]="'red'"><span style="color: red">Color is red</span></template>
      <template [ngSwitchWhen]="'yellow'"><span style="color: yellow">Color is yellow</span></template>
      <template [ngSwitchWhen]="'green'"><span style="color: green">Color is green</span></template>
      <template ngSwitchDefault><span style="color: blue">Blue is default color</span></template>
      </div>
  </section>
   <section class="directive">
     <h2>Custom StructuralDirectives: *myUnless</h2>
     <div>
       Enter true or false:
       <br/>
       <input type="text" #condition (keyup)="0">
     </div>
     <div *myUnless="condition.value != 'false'" >
       Only shown if 'false' was typed
     </div>
   </section>
  `,
  directives: [UnlessDirective]
})
export class StructuralDirectives{

    list =  ['Acai','Apple','Apricots','Avocado ','Banana','Blackberry','Blueberries','Cherries','Currents','Cucumber','Goji berries','Durian'] ;

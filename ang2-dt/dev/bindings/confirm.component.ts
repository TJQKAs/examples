import {Component, EventEmitter}from 'angular2/core';
// import {InputComponent} from './bindings/input.component';

@Component({
  selector: 'my-confirm',
  template: `<h4>Did you enter correct data about yourself? </h4>
  <p>Your name is  <span>{{mySelf.myName}}</span>  and You are  <span>{{mySelf.myAge}}</span>  years old.
  Please click on 'Confirm' button to assert your details</p>
  <div>
    <label for="myName">Your name</label><br/>
    <input type="text" id="myName" [(ngModel)]="mySelf.myName" (keyup)="onKeyup()">
  </div>
  <div>
    <label for="myAge">Your age</label><br/>
    <input type="text" id="myAge" [(ngModel)]="mySelf.myAge" (keyup)="onKeyup()">
  </div>
  <br/>
  <div>Filled out:{{isFilled  ? 'Yes' : 'No'}}</div>
  <div>Valid : {{isValid ? 'Yes' : 'No'}}</div>
  <br/>
  <button [disabled]="!isValid" (click)="onConfirm()">I confirm</button>
  `,
  inputs: ['mySelf'],
   outputs: ['confirmed']
})

export class ConfirmComponent{

    mySelf = {myName: '', myAge: ''};
    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<{myName: string, myAge: string}>();

    onKeyup(){
      if(this.mySelf.myName!= ' '&& this.mySelf.myAge!= ' '){

        // check whether ours forms are filled
        this.isFilled = true;
      } else {
        this.isFilled = false;
      }
       ///   / ^\d+$/.test(expression) - we check whether expression contains only digits by regex filter
      if(this.mySelf.myName!= ' '&& /^\d+$/.test(this.mySelf.myAge)){

        // check whether ours forms are filled
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    }
    onConfirm(){
      this.confirmed.emit(this.mySelf);
    }

}

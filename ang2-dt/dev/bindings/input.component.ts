import {Component, EventEmitter} from 'angular2/core';
@Component({
  selector:  'my-input',
  //   <input type="text" id="myName" [(ngModel)]="mySelf.myName" (keyup)="onKeyup()"> - 2w databinding
  // by (keyup)="onKeyup()" - start process
  //
  template: `
  <h2>Please type details about you</h2>
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
  <button [disabled]="!isValid" (click)="onSubmit()">Submit</button>
  `,
  // add outputs 
  outputs: ['submitted']
})

export class InputComponent {
mySelf = {myName:'', myAge: ''};
isFilled = false;
isValid = false;
// by EventEmitter we fire event
submitted = new EventEmitter<{myName: string, myAge: string}>();

// our checking empty function 'onKeyup()' below
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

 /// we create a function and attach  it upward to button 'Submit' so by clicking we encourage this function
   onSubmit(){
     //pass through emit object mySelf
     this.submitted.emit(this.mySelf);
   }


}

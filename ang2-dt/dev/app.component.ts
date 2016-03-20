import {Component} from 'angular2/core';

   @Component ({


  selector: 'my-app',
  // data bindng by curly braces
  // [value]="name" - prop binding first case; everything with prefix ng - is directive [ngClass]="{hyper: true};
  //(keyup)="onKeyup() - whenever we listen events and catch them by (keyup)  we want fire func onKeyup();
  // set the var inputElem and put value of this var  in func , so we can make oprations with him

  //   <input type="text" [(ngModel)]="name"> two way data binding - which handle input and output data from the same var
 template: `<h1 class="{{'hyper'}}">{{onTest()}}</h1>
 <br/>
     <input type="text" [value]="name"  [ngClass]="{hyper: true}"  (keyup)="onKeyup(inputElem.value)" #inputElem>
    <p>{{values}}<br/></p>
    <br/><br/><br/>
    <input type="text" [(ngModel)]="name">
    <p>Your name : {{name}}</p>
  `

})
// this our default class
export class AppComponent {
   name = "John Connor";
   values = "";
     onTest(){
       var getname = "Hi I m glad";
      return getname;
   }

     onKeyup(value: string){
        this.values += value + ' | ' ;
     }
}

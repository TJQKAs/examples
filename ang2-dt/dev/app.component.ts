import {Component} from 'angular2/core';

   @Component ({


  selector: 'my-app',
  // data bindng by curly braces 
 template: `<h1 class="{{'hyper'}}">{{onTest()}}</h1>
     <input type="text" value="{{name}}" class="{{'hyper'}}">
  `

})
// this our default class
export class AppComponent {
   name = "John Connor";
     onTest(){

       var getname = "Hi I m glad";
      return getname;
   }
}

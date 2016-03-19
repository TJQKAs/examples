import {Component} from 'angular2/core';

@Component({
  // find tag in html with the name my-app and execute the code below in
    selector: 'my-app',
    // by template we specify action here is just string, but we can set a link or extra document
    //for exampleby templateUrl - http:// ....
    //
    template: `
       <section class="setup">
       <h2>Game Setup</h2>
               Enter your name dude:
             <input type="text">
       </section>
       <section>
         <h2>The Puzzle!</h2>
         <p>Welcome to the game<span class="name">XXX</span></p>
         <br/>
         Switch 1:
         <input type="text"><br/>
         Switch 2:
         <input type="text"><br/>
         Switch 3:
         <input type="text"><br/>
         Switch 4:
         <input type="text"><br/>
       </section>
       <h2>Congrats XXX!  you did it</h2>




    `,


})
// this our default class
export class AppComponent {

}

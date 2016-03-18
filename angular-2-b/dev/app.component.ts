import {Component} from 'angular2/core';
// import second component , make directives below and appen my-component  html tags
import {MyComponentComponent} from "./my-component.component";

@Component({
  // find tag in html with the name my-app and execute the code below in
    selector: 'my-app',
    // by template we specify action here is just string, but we can set a link or extra document
    //for exampleby templateUrl - http:// ....
    //
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <li>this is a test</li>
        <p>В отличие от устройств Oculus Rift
         или HTC Vive, для работы Sulon Q не
         требуется подключать шлем к ПК, поскольку
          он представляет собой автономный носимый
           компьютер, работающий под управлением OC
           Windows 10. Разработчики называют Sulon Q
           первым в мире устройством в своем роде.
</p>
  <my-component></my-component>
    `,
    //we need MyComponentComponent and put it into my-component 
    directives : [MyComponentComponent]
})
// this our default class
export class AppComponent {

}

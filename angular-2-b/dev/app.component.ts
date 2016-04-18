import {Component} from 'angular2/core';
import{RouteConfig, ROUTER_DIRECTIVES}from 'angular2/router';
import{Component1Component}from './component1.component';
import{Component2Component}from './component2.component';

@Component({

    selector: 'my-app',
    template: `
   <header>
     <ul>
       <li><a [routerLink]="['Component1']">Component1</a></li>
       <li><a [routerLink]="['Component2']">Component2</a></li>
     </ul>
   </header>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
// array consists of all routes which we gonna use with this component
@RouteConfig([
  // 1)path; 2) name of route's identification; 3) which component should handle this route
   {path: ' /component-1', name: 'Component1', component: Component1Component},
   {path: ' /component-2', name: 'Component2', component: Component2Component}
])

export class AppComponent  {

}

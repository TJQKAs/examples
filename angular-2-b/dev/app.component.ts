import {Component} from 'angular2/core';
import{RouteConfig, ROUTER_DIRECTIVES}from 'angular2/router';
import{Component1Component}from './component1.component';
import{Component2Component}from './component2.component';

@Component({

    selector: 'my-app',
    template: `
   <header>
     <ul>
       <li><a [routerLink]="['Component1', {source:'AppComponent', optional:'This is optional'}]">Component1</a></li>
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
   //' /component-1/   (this is param which we add to component) :source',
   // to use subroutes after :source put 3 dots  like :  ' /component-1/:source/...',
   {path: ' /component-1/:source/...', name: 'Component1', component: Component1Component},
   {path: ' /component-2', name: 'Component2', component: Component2Component}
])

export class AppComponent  {

}

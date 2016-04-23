import {Component, OnInit}from 'angular2/core';
import{RouteParams, RouteConfig, ROUTER_DIRECTIVES}from 'angular2/router';
import{Comp1MainComponent}from './component1-main.component';
import{Comp1SubComponent}from './component1-sub.component';

@Component({

  //  selector: "",
   template: `This is Component1
  <div>
    Source is {{source}}
  </div>
  <div>This is optional param : {{optional}}</div>
  <div><a [routerLink]="['Component1Main']"> This main path</a></div>
    <div><a [routerLink]="['Component1Sub']">This sub path </a></div>
  <router-outlet></router-outlet>
   `,
   directives: [ROUTER_DIRECTIVES]

})

@RouteConfig ([
  //  that's how we extend the url of component1 e.g. everything which passes after '/' ;
  {path:'/', name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true},
    {path:'/subroute', name: 'Component1Sub', component: Comp1SubComponent}
])

export class Component1Component implements OnInit{
 //define property
   source: string;
   optional: string;
   constructor (private _routeParams: RouteParams){}

   ngOnInit():any{
     this.source = this._routeParams.get('source');
          this.optional = this._routeParams.get('optional');
   }

}

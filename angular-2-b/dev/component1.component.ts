import {Component, OnInit}from 'angular2/core';
import{RouteParams}from 'angular2/router';

@Component({

  //  selector: "",
   template: `This is Component1
  <div>
    Source is {{source}}
  </div>
  <div>This is optional param : {{optional}}</div>

   `

})

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

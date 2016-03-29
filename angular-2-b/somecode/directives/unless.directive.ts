import {Directive, TemplateRef, ViewContainerRef} from 'angular2/core';

@Directive({
  selector: '[myUnless]',
  inputs: ['myUnless']
})

export class UnlessDirective{
  constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef){}
 // specify what happens if  this input get set
 //  if condition is false // condition is what ever we typed  between quotation marks with tag #condition
   set myUnless(condition: boolean){
     if(!condition){
       // we want access to _viewContainerRef and tell him to create embeded view which should includes template
       // in our case it will be  "Only shown if 'false' was typed"
       this._viewContainerRef.createEmbeddedView(this._templateRef);
     } else {
       // otherwise we wonna clear this container
       this._viewContainerRef.clear();
     }
   }
}

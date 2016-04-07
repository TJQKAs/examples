import {Component} from 'angular2/core';
import{TemplateDrivenFromComponent} from './template-driven-form.component';
import{DataDrivenFromComponent}from './data-driven-form.component';
@Component({

    selector: 'my-app',
    template: `<template-driven-form></template-driven-form><br/><br/>
     <data-driven-form></data-driven-form>

    `,
    directives: [TemplateDrivenFromComponent, DataDrivenFromComponent]


})
export class AppComponent  {

}

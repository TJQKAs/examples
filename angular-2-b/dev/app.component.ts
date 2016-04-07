import {Component} from 'angular2/core';
import{TemplateDrivenFormComponent} from './template-driven-form.component';
import{DataDrivenFormComponent}from './data-driven-form.component';
@Component({

    selector: 'my-app',
    template: `<template-driven-form></template-driven-form><br/><br/>
     <data-driven-form></data-driven-form>

    `,
    directives: [TemplateDrivenFormComponent, DataDrivenFormComponent]


})
export class AppComponent  {

}

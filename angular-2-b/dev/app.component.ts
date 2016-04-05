import {Component} from 'angular2/core';
import{TemplateDrivenFromComponent} from './template-driven-form.component';
@Component({

    selector: 'my-app',
    template: `<template-driven-form></template-driven-form>
    `,
    directives: [TemplateDrivenFromComponent]


})
export class AppComponent  {

}

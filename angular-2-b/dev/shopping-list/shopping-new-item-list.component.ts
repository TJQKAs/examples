import{Component, OnInit}from 'angular2/core';
import {ListItem}from './listItem';
import{ShoppingListService} from './shopping-list.service';
import{ControlGroup, FormBuilder, Validators, Control}from 'angular2/common';

@Component({
 selector:'shopping-new-list-item',
 template: `
 <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
 <div class="input">
   <label for="item-name">Name</label>
   <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
 </div>
 <div class="input">
   <label for="item-amt">Amount</label>
   <input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']">
 </div>
 <button type="submit" [disabled]="!myForm.valid">Add Item!</button>
 </form>

 `

})

export class ShoppingNewListComponent implements OnInit{
// js object
  item = {name: '', amount: 0};
  myForm: ControlGroup;

  // create references to components
  constructor(private _shopListService:ShoppingListService, private _formBuilder: FormBuilder){}

// by clicking we fire this function which pass this.item to whoever be able catch this event (in our shopping-list component)
onSubmit(){
  ///   this._shopListService.insertItems(this.item); - we can't use this.item we should use new object
  // otherwise cuase this.item its ref to object every new data will be the same because of  2WDB - data change everywhere in sameway
 // with the same ref
  this._shopListService.insertItems({name: this.item.name, amount: this.item.amount});
  }

// set myForm here
ngOnInit():any{
  // call method group of FormBuilder via refernce _formBuilder and put there
  // my forms (inputs or elements)which I'm going to check
  this.myForm =this._formBuilder.group({
    // default validator
        'itemName':[' ', Validators.required],
        'itemAmount':[' ', Validators.compose([
            Validators.required,
            // validator which we've made
            greaterthanZero
        ])],
  });
}
}
// additional filter which I've created
function greaterthanZero(control: Control):{[s: string]: boolean}{
  // we return error that value less than zero if value < 0
  if(control.value <= 0){
    return {lessThanZero: true};
  }
}

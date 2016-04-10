import {Component, EventEmitter}from 'angular2/core';
import{ListItem}from './listItem';
import{ShoppingListService}from './shopping-list.service';

@Component({
  selector: 'shopping-list-item',
  template: `
  <div class="input">
    <label for="item-name">Name</label>
    <input type="text" id="item-name" [(ngModel)]="item.name">
  </div>
  <div class="input">
    <label for="item-amt">Amount</label>
    <input type="text" id="item-amt" [(ngModel)]="item.amount">
  </div>
  <button class="danger" (click)="onDelete()">Delete!</button>
  `,
  inputs: ['item'],
  outputs: ['removed'],
  providers: [ShoppingListService]
})

export class ShoppingListIemComponent{
     item = {name: ' ', amount: 0};
     removed = new EventEmitter<any>();
    constructor(private _shopListService:ShoppingListService){}

     onDelete(){
       // when we click button with tag onDelete , runs onDelete function
       // which sets to elem in which we click button  referal _shopListService which call
       // method removeItems from ShoppingListService service
       // method splice listItem array and delete only this elem from array
      this.listItem = this._shopListService.removeItems();
      // send to shopping-list.component message with removing event
      // for this use EventEmitter
      this.removed.emit(null);
     }
}

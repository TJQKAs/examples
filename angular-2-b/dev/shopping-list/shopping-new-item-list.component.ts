import{Component, EventEmitter}from 'angular2/core';
import {ListItem}from './listItem';

@Component({
 selector:'shopping-new-list-item',
 template: `
<div class="input">
  <label for="item-name">Name</label>
  <input type="text" id="item-name" [(ngModel)]="item.name">
</div>
<div class="input">
  <label for="item-amt">Amount</label>
  <input type="text" id="item-amt" [(ngModel)]="item.amount">
</div>
<button (click)="onClick()">Add Item!</button>
 `,
 outputs: ['itemAdded']

})

export class ShoppingNewListComponent{
// js object
  item = {name: '', amount: 0};
  itemAdded = new EventEmitter<ListItem>();

// by clicking we fire this function which pass this.item to whoever be able catch this event (in our shopping-list component)
onClick(){
  this.itemAdded.emit(this.item);
}

}

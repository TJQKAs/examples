import{Component}from 'angular2/core';
import {ListItem}from './listItem';
import{ShoppingListService} from './shopping-list.service';

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
 `

})

export class ShoppingNewListComponent{
// js object
  item = {name: '', amount: 0};

  constructor(private _shopListService:ShoppingListService){}

// by clicking we fire this function which pass this.item to whoever be able catch this event (in our shopping-list component)
onClick(){
  ///   this._shopListService.insertItems(this.item); - we can't use this.item we should use new object
  // otherwise cuase this.item its ref to object every new data will be the same because of  2WDB - data change everywhere in sameway
 // with the same ref 
  this._shopListService.insertItems({name: this.item.name, amount: this.item.amount});
}

}

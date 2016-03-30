import {Component} from 'angular2/core';
import{ShoppingNewListComponent} from './shopping-new-item-list.component';
import{ListItem}from './listItem';
import{ShoppingListIemComponent}from './shopping-list-item.component';

@Component({

  selector: 'shopping-list',
  template:`
      <section>
      <shopping-new-list-item (itemAdded)="onItemAdded($event)">
      </shopping-new-list-item>
       </section>
      <section>
        <h3>My list </h3>
        <div class="list">
         <ul>
           <li *ngFor="#listItem of listItems" (click)="onSelect(listItem)">{{listItem.name}} amount :  {{listItem.amount}}</li>
         </ul>
        </div>
      </section>
      <section *ngIf="selectedItem!=null">
      <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
      </section>
  `,
  directives: [ShoppingNewListComponent, ShoppingListIemComponent]
})

  export class ShoppingListComponent{
    // for outputting anything  from the list , array with js object which holds our data
    listItems = new Array<{ListItem}>();
    selectedItem: ListItem;

    onItemAdded(item: ListItem){
      this.listItems.push({name: item.name, amount: item.amount});
    }
   onSelect(item: ListItem){
     this.selectedItem = item;
   }
   onRemove(item: ListItem){
     this.listItems.splice(this.listItems.indexOf(item), 1);
     this.selectedItem = null;
   }

  }

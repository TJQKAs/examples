import {Component} from 'angular2/core';
import{ShoppingNewListComponent} from './shopping-new-item-list.component';

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
           <li *ngFor="#listItem of listItems">{{listItem.name}} amount :  {{listItem.amount}}</li>
         </ul>
        </div>
      </section>
      <section>
        Edit Item
      </section>
  `,
  directives: [ShoppingNewListComponent]
})

  export class ShoppingListComponent{
    // for outputting anything  from the list , array with js object which holds our data
    listItems = new Array<{name: string, amount: number}>();

    onItemAdded(item: {name:string, amount:number}){
      this.listItems.push({name: item.name, amount: item.amount});
    }
  }

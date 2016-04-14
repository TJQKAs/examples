import {Component, OnInit} from 'angular2/core';
import{ShoppingNewListComponent} from './shopping-new-item-list.component';
import{ListItem}from './listItem';
import{ShoppingListIemComponent}from './shopping-list-item.component';
import{ShoppingListService} from './shopping-list.service';
import{FilterPipe}from '../filter.pipe';

@Component({

  selector: 'shopping-list',
  template:`
      <section>
      <shopping-new-list-item></shopping-new-list-item>
       </section>
      <section>
        <h3>My list </h3>
        Filter:
        <input type="text" #filter (keyup)="0">
        <div class="list">
         <ul>
           <li *ngFor="#listItem of listItems | myFilter:filter.value" (click)="onSelect(listItem)">{{listItem.name}} amount :  {{listItem.amount}}</li>
         </ul>
        </div>
      </section>
      <section *ngIf="selectedItem!=null">
      <shopping-list-item [item]="selectedItem" (removed)="onRemove()"></shopping-list-item>
      </section>
  `,
  directives: [ShoppingNewListComponent, ShoppingListIemComponent],
  providers: [ShoppingListService],
  pipes: [FilterPipe]
})

  export class ShoppingListComponent implements OnInit{
    // for outputting anything  from the list , array with js object which holds our data
    listItems = Array<ListItem>;
    selectedItem: ListItem;

    constructor(private _shopListService:ShoppingListService ){}

   onSelect(item: ListItem){
     this.selectedItem = item;
   }
   ngOnInit():any{
     // array ListItems gets data from _shopListService service and its method getItems
     this.listItems = this._shopListService.getItems();
   }

   //<shopping-list-item [item]="selectedItem" (removed)="onRemove()"
   // listen message for (removed) if we catch one we fulfill function onRemove
   // which sets to this selectedItem param null
   // that's how we can clean elem which we've deleted just before
  //  add this function because without
   onRemove(){
     this.selectedItem = null;
   }
  }

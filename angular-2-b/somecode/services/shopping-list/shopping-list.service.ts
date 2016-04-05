import {Injectable} from 'angular2/core';
import{ListItem}from './listItem';
import {shopping_list}from './mock-shopping-list';

@Injectable()

export class ShoppingListService {
 // add 3 methods get , add , delete

 // ListItem - argument which will pass through method
  getItems(){

    return shopping_list;
  }
  // just push to shopping_list item 
  insertItems(item: ListItem){
      shopping_list.push(item);
  }
  removeItems(item: ListItem){
    // splice shopping_list and find item with index and delete it
     shopping_list.splice(shopping_list.indexOf(item), 1);
  }
}

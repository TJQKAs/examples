import{Injectable}from 'angular2/core';

@Injectable()

export class DataService{
  private _data = ['iron', 'steel', 'plumbum', 'oil', 'tin'];

   //function which returns random string from array
  getRandomString(){
    // Math.floor - use to cut a tail and get integer ; Math.random mult to _data.length to choose on elem from array
     let rndNum = Math.floor(Math.random() * this._data.length);
     // return elem with index rndNum from _data array
     return this._data[rndNum];
  }
  // add function which allows to put smth to my _data array
  // var value type string
  insertElem(value: string){
    // just push value to _data array
    this._data.push(value);
  }
}

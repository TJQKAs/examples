import{Component} from 'angular2/core';
import{LoggingService} from './services/logging.service';
import{CalculatorService} from './services/calculator.service';
import{DataService} from './services/data.service';

@Component({
  selector: 'component-1',
  template: `
   <div>
    <h3>LoggingService</h3>
    <input type="text" #message>
    <button (click)="onLog(message.value)">Send</button>
   </div>
   <div><h3>Calculator </h3>
   <p>Add or multiply numbers</p>
   <input type="number" #num1>
   <input type="number" #num2>
  <button (click)="onAdd(num1.value, num2.value)">ADD</button>
  <button (click)="onMult(num1.value, num2.value)">MULT</button>
  <button (click)="onSubs(num1.value, num2.value)">SUBSTRUCT</button>
  <button (click)="onDiv(num1.value, num2.value)">DIVIDE</button>
  <br/>
  <p>Result: {{result}}</p>
   </div>
   <div>
     <h3>Data Service</h3>
     <button (click)="onGetData()">Get Data</button>
     <p>Current result: {{data}}</p>
     <input type="text" #newData>
     <button (click)="onInsertElem(newData.value)">Add word</button>
   </div>
  `,
  providers: [LoggingService, CalculatorService, DataService]
})
// by clicking I pass message.value through function onLog which is a string

export class Component1Component{
  result: string;
  data: string;

  //use constuctor to bind injecting service with private variable
  constructor(private _loggingService: LoggingService, private _calcService: CalculatorService, private _dataServ: DataService){}
 // retrieve data from input form and put it through function
 // which tells us to pass var message through referal _loggingService which is referal to the service in our constructor
 // and service LoggingService just makes console.log - massage
    onLog(message: string){
      // show message from service
      this._loggingService.log(message);
    }
  // take 2 numbers from input fields, convey them to export class where by constructor we created refernces to services with functions
 // click to ADD and we convey data to onAdd function which show the result which is equal to refernce to method add from service CalculatorService
 // which make operations with data and return something which is equal to result which we display jn <p>{{result}}</p>

    onAdd(num1: number, num2: number){
      this.result =  this._calcService.add(+ num1, + num2);
    }
    onMult(num1: number, num2: number){
      this.result =  this._calcService.mult(+ num1, + num2);
    }

    onSubs(num1: number, num2: number){
      this.result =  this._calcService.subs(+ num1, + num2);
    }

    onDiv(num1: number, num2: number){
      this.result =  this._calcService.divide(+ num1, + num2);
    }

   onGetData(){
     this.data = this._dataServ.getRandomString();
   }

   // var value type string we got meaning from tag #newData after that we got newData.value
   // by clicking button we called function onInsertElem with this value which is a string
    onInsertElem(value: string){
      // function called referal _dataServ of DataService which has a method insertElem
      // which add this newData var to array
      this._dataServ.insertElem(value);
    }

}

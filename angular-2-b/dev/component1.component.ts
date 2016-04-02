import{Component} from 'angular2/core';
import{LoggingService} from './services/logging.service';

@Component({
  selector: 'component-1',
  template: `
     <input type="text" #message>
     <button (click)="onLog(message.value)">Send</button>
  `,
  providers: [LoggingService]
})
// by clicking I pass message.value through function onLog which is a string

export class Component1Component{
  //use constuctor to bind injecting service with private variable
  constructor(private _loggingService: LoggingService){}
 // retrieve data from input form and put it through function
 // which tells us to pass var message through referal _loggingService which is referal to the service in our constructor
 // and service LoggingService just makes console.log - massage
    onLog(message: string){
      // show message from service
      this._loggingService.log(message);
    }
}

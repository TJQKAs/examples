import{Injectable} from 'angular2/core';

// service should be injectable into components
@Injectable()


export class LoggingService{
  // service displays string in console
  log(message: string){
    message = message + ' ' + message;
    console.log(message);
  }
}

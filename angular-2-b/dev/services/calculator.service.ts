import{Injectable}from 'angular2/core';

@Injectable()

export class CalculatorService{

  add(num1: number, num2: number){
    return num1 + num2;
  }
  mult(num1: number, num2: number){
    return num1 * num2;
  }
  subs(num1: number, num2: number){
    return num1 - num2;
  }
   divide(num1: number, num2: number){
    return num1 /  num2;
  }
}

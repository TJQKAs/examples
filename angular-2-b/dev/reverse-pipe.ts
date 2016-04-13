import {Pipe, PipeTransform} from 'angular2/core';
@Pipe ({
  name: 'myReverse'
})
//PipeTransform interface and transform method with 2 arg
export  class ReversePipe implements PipeTransform {

// value is what we gonna to change
  transform(value: string, args:any[]){
    const length = value.length;
    // our output
    let resultString = '';
    for(let i = 0; i < length; i++){
      // thus way each recent input will be at the beginning
      resultString = value[i] + resultString;
    }
    return resultString;
  }
}

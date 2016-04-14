import{Pipe, PipeTransform}from 'angular2/core';
import{ListItem} from './shopping-list/listItem';

@Pipe({
  name: 'myFilter'
})

export class FilterPipe implements PipeTransform{
  // ListItem contains data which we should check
   transform(value: ListItem[], args: string[]):any{
     // check if list empty becuase in this case there is nothing to check
      if(value.length === 0){
        return value;
      }
      // otherwise pass data throug filter and return result in resultArray
      let resultArray = [];
      // for each item in value array which we've got pass through filter
      for (let item of value) {
        if(item.name.match('^.*' + args[0] + '.*$')){
          resultArray.push(item);
        }
        return resultArray;
      }
   }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliderpipe'
})
export class SliderpipePipe implements PipeTransform {

  transform(arr: any[], age: number): any {
    return arr.filter(a => a.age < age);
  }

}

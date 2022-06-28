import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, param: number): number {
    let mult:number;
    mult=value*param;
    return mult;
  }

}

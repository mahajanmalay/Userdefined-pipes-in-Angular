import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let temp:string="";
    let i:number;
    for(i=0;i<value.length;i++)
    {
      temp=temp+value[value.length-i-1];
    }
    return temp;
  }

}

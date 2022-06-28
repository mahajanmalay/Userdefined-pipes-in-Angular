import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string 
  {
    if(param=="Prime")
    {
      let i:number;
      for(i=2;i<value;i++)
      {
        if(value%i==0)
        {
          return "It is not a prime number"
        }
        else
        {
          return "It is a prime number"
        }
      }

    }
    if(param=="Perfect")
    {
      let i:number;
      let sum:number=0;
      for(i=1;i<value;i++)
      {
        if(value%i==0)
        {
          sum=sum+i;
        }
      }
      if(sum==value)
      {
        return "It is a perfect number";
      }
      else
      {
        return "It is not a perfect number";
      }
    }
    if(param=="Even")
    {
      if(value%2==0)
      {
        return "it is an even number";
      }
      else
      {
        return "it is not an even number";
      }
    }
    if(param=="Odd")
    {
      if(value%2!=0)
      {
        return "it is an odd number";
      }
      else
      {
        return "it is not an odd number";
      }
    }
    else{
      return "You entered wrong pipe name";
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor(){
    console.log("Powerpipe created");
  }

  transform(value: any, exponent:number=1): number {
    console.log("power pi ",value , exponent)
    return Math.pow(value,exponent);
  }

}

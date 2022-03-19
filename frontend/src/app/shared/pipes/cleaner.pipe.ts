import { Pipe, PipeTransform } from '@angular/core';
 

@Pipe({
  name: 'cleaner'
})



export class CleanerPipe implements PipeTransform {

  transform(value: any[], key:string): any {
 
    //Remove duplicates and emty fields from characters array
    return [...new Map(value.filter(item=>item[key]!='').map(item =>[item[key], item])).values()]
    
     
  }

}

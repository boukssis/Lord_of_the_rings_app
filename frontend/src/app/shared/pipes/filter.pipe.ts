import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character';

@Pipe({
  name: 'filter',
})

//filter characters
 export class FilterPipe implements PipeTransform {
  transform(value: Character[], input:any): any {
    if (Object.keys(input).length === 0 ) {
      return value;
    }
   
    if(input.gender !=''){
            value = value.filter((character) =>
           character.gender.toLowerCase().includes(input.gender.toLowerCase())
         )}
     

    if(input.name !=''){
      value = value.filter((character) =>
      character.name.toLowerCase().includes(input.name.toLowerCase())
    )};

    if(input.hair !=''){
 
      value = value.filter((character) =>
      character.hair.toLowerCase().includes(input.hair.toLowerCase())
    )}

  
    if(input.race !=''){
       value = value.filter((character) =>
      character.race.toLowerCase().includes(input.race.toLowerCase())
    )}
      
    
    return value;
  }
}

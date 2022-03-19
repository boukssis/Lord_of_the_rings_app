import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit{

   constructor(
    private charachersService: CharactersService 
  ) {}
  p:number=1
  characters: Array<Character> = [];
  Names: Array<string> = [];
  name:string=''
  hair:string=''
  gender:string=''
  race:string=''

 

  ngOnInit(): void {
    this.charachersService.get_List_characters().subscribe((data) => {
      this.characters = data;
    });
  }

  // get selected values from select(child) component

  getName(name:string){
    this.name=name
  }

  getHair(hair:string){
    this.hair=hair
  }


  getGender(gender:string){
    this.gender=gender
  }

  getRace(race:string){
    this.race=race
  }

 

  //reset filter 
  refresh(){
     this.name=this.hair=this.gender=this.race=''
  }
 
}

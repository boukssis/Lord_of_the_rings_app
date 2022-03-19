import { Component, OnInit, Input} from '@angular/core';
import { Character } from 'src/app/shared/models/character';
 
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
@Input() character:any
  constructor() { }

  ngOnInit(): void {
  }

}

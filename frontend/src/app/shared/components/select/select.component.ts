import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
 import { Character } from '../../models/character';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
@Input() characters:Character[]=[]
@Input() label:string=''
@Input() keyType:string=''
@Output() inputEmitter = new EventEmitter<string>();

public name:string=''

  constructor() { }

  ngOnInit(): void {
  }


  onChange(){
    this.inputEmitter.emit(this.name)
  }
}

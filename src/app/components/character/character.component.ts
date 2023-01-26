import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ICharacter } from 'src/app/models/character';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  errorMessage: string = ""
  character!: ICharacter


  constructor(
    private dataService: DataService,
    public bsModalRef: BsModalRef,
    ) { }

  ngOnInit(): void {
    this.dataService.selectChar$.subscribe((data)=> this.character = data)
  }

}

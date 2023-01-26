import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ICharacter } from '../../models/character';
import { DataService } from '../../services/data.service';
import { CharacterComponent } from 'src/app/components/character/character.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  selectChar!: ICharacter
  bsModalRef?: BsModalRef;
  
  constructor(
    private dataService: DataService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    
  }

  @Input() card: any = {}

  public characterDetail(id: string ) {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.dataService.getCharactersById(Number(id)).subscribe((data) => {
      this.dataService.selectChar$.next(data)
    });
    this.bsModalRef = this.modalService.show(CharacterComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

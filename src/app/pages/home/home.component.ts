import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Result, Info } from '../../models/characters';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  characters:Result[] = [];
  page: number = 0;
  filtro:string= '';
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.dataService.search$.subscribe(data => this.filtro = data)
  }

  public getCharacters(): void {
    this.dataService.getCharacters().subscribe((data) => {
      let {results} = data 
      this.characters = results;
    })
  }

  nextPage(){
    this.page += 5
  }

  prevPage(){
    if(this.page > 0)
      this.page -= 5
  }
}


import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RickAndMorty';
  filtro: string = '';

  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void {}

  handleSearch(value: string): void {
    this.dataService.search$.next(value)
  }


  
}



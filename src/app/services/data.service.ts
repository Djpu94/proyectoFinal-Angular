import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacters } from '../models/characters';
import { ICharacter } from '../models/character';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectChar$ = new BehaviorSubject<ICharacter>({
    id:       0,
    name:     "",
    status:   "",
    species:  "",
    type:     "",
    gender:   "",
    origin:   {
      name: "",
      url:  ""
    },
    location: {
      name: "",
      url:  ""
    },
    image:    "",
    episode:  [],
    url:      "",
    created:  ""
  });
  search$ = new BehaviorSubject<string>('')
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getCharacters():Observable<ICharacters>{
    return this.http.get<ICharacters>(`${this.URL}/character`);
  }
  getCharactersById(id: number):Observable<ICharacter>{
    return this.http.get<ICharacter>(`${this.URL}/api/character/${id}`);
  }
}

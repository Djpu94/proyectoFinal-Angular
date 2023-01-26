import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe((value) => this.searchEmitter.emit(value))
  }

  search = new FormControl('');

  @Input() title: string = ''
  @Output('search') searchEmitter = new EventEmitter<any>();

}
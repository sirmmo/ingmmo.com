import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;
  constructor() { }

  ngOnInit() {
  }

}

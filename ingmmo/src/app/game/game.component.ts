import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game;
  constructor() { }

  ngOnInit() {
  }

}

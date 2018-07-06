import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-les',
  templateUrl: './les.component.html',
  styleUrls: ['./les.component.css']
})
export class LesComponent implements OnInit {
  @Input() les

  constructor() { }

  ngOnInit() {
  }

}

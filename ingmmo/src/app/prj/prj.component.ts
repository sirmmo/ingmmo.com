import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-prj',
  templateUrl: './prj.component.html',
  styleUrls: ['./prj.component.css']
})
export class PrjComponent implements OnInit {

  @Input() prj;
  constructor() { }

  ngOnInit() {
  }

}

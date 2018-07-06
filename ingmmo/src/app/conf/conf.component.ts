import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.css']
})
export class ConfComponent implements OnInit {

  @Input() conf;
  constructor() { }

  ngOnInit() {
  }

}

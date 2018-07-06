import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  @Input() sms;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Subscription, timer, pipe } from 'rxjs';

@Component({
  selector: 'mmo-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() left = [];
  @Input() divider = [];
  @Input() right = [];

  left_;
  divider_;
  right_;

  constructor() { }

  ngOnInit() {
    timer(0, 1500).subscribe(d => {
      this.switch_name();
    });
  }

  switch_name() {
    const lidx  = this.getRandomInt(0, this.left.length - 1);
    this.left_ = this.left[lidx];
    const didx  = this.getRandomInt(0, this.divider.length - 1);
    this.divider_ = this.divider[didx];
    const ridx  = this.getRandomInt(0, this.right.length - 1);
    this.right_ = this.right[ridx];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

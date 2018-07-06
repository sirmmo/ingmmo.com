import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmo-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}

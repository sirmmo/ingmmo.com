import { Component, OnInit } from '@angular/core';
import { IngmmoService } from './ingmmo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  sms_list;
  post_list;
  conf_list;
  prj_list;
  less_list;
  book_list;
  game_list;

  constructor(
    private ingmmo: IngmmoService
  ) { }

  ngOnInit() {
    this.ingmmo.socials.subscribe(data =>  {this.sms_list  = data; });
    this.ingmmo.posts.subscribe(data =>    {this.post_list = data; });
    this.ingmmo.confs.subscribe(data =>    {this.conf_list = data; });
    this.ingmmo.projects.subscribe(data => {this.prj_list  = data; });
    this.ingmmo.lessons.subscribe(data =>  {this.less_list = data; });
    this.ingmmo.books.subscribe(data =>    {this.book_list = data; });
    this.ingmmo.games.subscribe(data =>    {this.game_list = data; });
  }

}

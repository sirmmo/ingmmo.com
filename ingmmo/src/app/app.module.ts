import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfComponent } from './conf/conf.component';
import { PrjComponent } from './prj/prj.component';
import { BookComponent } from './book/book.component';
import { SmsComponent } from './sms/sms.component';
import { GameComponent } from './game/game.component';
import { PostComponent } from './post/post.component';
import { IngmmoService } from './ingmmo.service';
import { HttpClientModule } from '@angular/common/http';
import { LesComponent } from './les/les.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfComponent,
    PrjComponent,
    BookComponent,
    SmsComponent,
    GameComponent,
    PostComponent,
    LesComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [IngmmoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

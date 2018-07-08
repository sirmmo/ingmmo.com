import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngmmoService {

  constructor(
    private http: HttpClient
  ) { }

  get books(): Observable<any> {
    return this.http.get('assets/books.json');
  }

  get confs(): Observable<any> {
    return this.http.get('assets/conferences.json');
  }

  get games(): Observable<any> {
    return this.http.get('assets/games.json');
  }

  get posts(): Observable<any> {
    return this.http.get('assets/posts.json');
  }

  get lessons(): Observable<any> {
    return this.http.get('assets/lessons.json');
  }

  get projects(): Observable<any> {
    return this.http.get('assets/projects.json');
  }

  get socials(): Observable<any> {
    return this.http.get('assets/socials.json');
  }

  get boardgames(): Observable<any> {
    return this.http.get('assets/boardgames.json');
  }
}

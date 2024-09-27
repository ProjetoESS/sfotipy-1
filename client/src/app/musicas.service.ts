import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Music } from '../../../common/music';



@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  criar(music: Music): Observable<Music | null> {
    return this.http.post<any>(this.taURL + "/music", music, { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { if (res.success) { return music; } else { return null; } })
      );
  }

  atualizar(music: Music): Observable<Music | null> {
    return this.http.put<any>(this.taURL + "/music", JSON.stringify(music), { headers: this.headers }).pipe(
      retry(2),
      map(res => { if (res.success) { return music; } else { return null; } })
    );
  }

  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(this.taURL + "/musics")
      .pipe(
        retry(2)
      );
  }

  getMusicsById(id: number): Observable<Music> {
    return this.http.get<Music>(this.taURL + "/musics/" + id)
      .pipe(
        retry(2)
      );
  }
}

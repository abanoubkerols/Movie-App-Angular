import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  image = "https://image.tmdb.org/t/p/w500/"

  constructor(private http: HttpClient) {


  }


  getTrending(type: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=ecc0e733a4063bd55121f97655fdda5f`)
  }

  getDetails(id:string) :Observable<any> { 

    return this.http.get(`https://api.themoviedb.org/3/movie/${id}day?api_key=ecc0e733a4063bd55121f97655fdda5f`)
  }
}

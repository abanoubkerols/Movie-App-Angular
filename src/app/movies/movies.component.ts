import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie :any []=[]
  image : string = ''
  term:string =''
  constructor(private movies :MoviesService) { }

  ngOnInit(): void {
    this.image = this.movies.image
    this.movies.getTrending("movie").subscribe({
      next:(res:any) => {this.movie = res.results}
    })
  }

}

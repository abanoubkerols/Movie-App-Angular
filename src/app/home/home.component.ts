import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trading: any[] = []
  tv: any[] = []
  people :any []=[]
  image : string = ''
  constructor(private movies: MoviesService) { }
  
  

  ngOnInit(): void {
    this.image = this.movies.image
    this.movies.getTrending("movie").subscribe({
      next:(res:any) => {this.trading = res.results.slice(0,10)}
    })
    this.movies.getTrending("tv").subscribe({
      next:(res:any) => {this.tv = res.results.slice(0,10)}
    })
    this.movies.getTrending("person").subscribe({
      next:(res:any) => {this.people = res.results.slice(0,10)}
    })
  }

}

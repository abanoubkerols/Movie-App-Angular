import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detalis',
  templateUrl: './movie-detalis.component.html',
  styleUrls: ['./movie-detalis.component.scss']
})
export class MovieDetalisComponent implements OnInit {
  movieId: any = ''
  details: any = {}
  oneimage: string = ''
  constructor(private avtiveRoute: ActivatedRoute, private movieService: MoviesService) {
    this.oneimage = this.movieService.image
    this.movieId = this.avtiveRoute.snapshot.params['id']
    this.movieService.getDetails(this.movieId).subscribe({
      next: (res: any) => this.details = res

    })


  }

  ngOnInit(): void {
  }

}

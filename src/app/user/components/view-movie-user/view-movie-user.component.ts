import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-view-movie-user',
  templateUrl: './view-movie-user.component.html',
  styleUrls: ['./view-movie-user.component.css']
})
export class ViewMovieUserComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.displayAllMovies();
  }

  movie:Movie = new Movie();
  movies:Array<Movie> = [];
  data:any={};
  errorMessage:string|any;
  isError = false;
  show=true;
  
  displayAllMovies(){
    this.movieService.getAllMovies().subscribe( (data:any) =>
    {
      if(data.Payload===undefined || data.Payload===null){
        this.errorMessage = data.message;
        this.isError=true;
      }
      else{
        this.movies = data.Payload;
      }
      
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    })
  }

}

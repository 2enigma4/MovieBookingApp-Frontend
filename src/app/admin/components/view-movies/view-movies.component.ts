import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie/movie';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {

  
  constructor(private movieService: MovieService) { }

  movie:Movie = new Movie();
  movies:Movie[] = [];
  errorMessage:string|any;
  isError = false;

  ngOnInit(): void {
    this.displayAllMovies();
  }

  

  displayAllMovies(){
    this.movieService.getAllMovies().subscribe((data:any) =>{
      if(data.Payload===undefined){
        this.errorMessage = data.message;
        this.isError=true;
      }
      else{
        this.movies=data.Payload;
      }
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    })
  }

  deleteMovie(movieId:number){
    this.movieService.deleteMovie(movieId).subscribe((data :any) =>{
      let movieIndex = this.movies.findIndex(m=>m.movieId === movieId);
      this.movies.splice(movieIndex,1);
      alert(data.Message);
      this.displayAllMovies();
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    })
  }

}

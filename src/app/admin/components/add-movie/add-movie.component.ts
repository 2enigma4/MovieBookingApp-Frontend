import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie/movie';
import { MovieDto } from 'src/app/models/movieDto/movie-dto';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent{

  constructor( private movieService: MovieService) { }

  movieDTO:MovieDto = new MovieDto();
  movie :Movie = new Movie();
  errorMessage:string|any;
  isError = false;


  movieName = new FormControl('',[Validators.required]);
  theaterName = new FormControl('',[Validators.required]);
  totalSeats = new FormControl('',[Validators.required]);

  addMovieDetails(){
    this.movieService.addMovie(this.movieDTO).subscribe( (data:any) =>{
        if(data.Payload===undefined){
          this.errorMessage = data.message;
          this.isError=true;
        }
        else{
          this.movie = data.Payload;
          alert(data.Message);
          window.location.reload();
        }
        
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    })
  }

}

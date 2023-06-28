import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { Movie } from '../models/movie/movie';
import { of } from 'rxjs';
import { ViewMoviesComponent } from '../admin/components/view-movies/view-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('MovieService', () => {
  let service: MovieService;
  let movieComp: ViewMoviesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[ViewMoviesComponent],
      imports:[
        HttpClientTestingModule, HttpClientModule
      ],
      providers:[MovieService, ViewMoviesComponent]
    });
    service = TestBed.inject(MovieService);
    movieComp=TestBed.inject(ViewMoviesComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a collection of movies by calling get api',()=>{
    let userResponse: Movie[]|any;
      [
        {movieId: 201,movieName:"Titanic",theaterName: "Inox",totalSeats:100,totalBookedSeats:0,totalAvailableSeats:100, movieStatus:"BOOK_ASAP",tickets:[]},
        {movieId: 202,movieName:"Spider Man",theaterName: "Fun",totalSeats:120,totalBookedSeats:0,totalAvailableSeats:120, movieStatus:"BOOK_ASAP",tickets:[]},
        {movieId: 203,movieName:"Fast X",theaterName: "Gold",totalSeats:200,totalBookedSeats:0,totalAvailableSeats:200, movieStatus:"BOOK_ASAP",tickets:[]}
      ];

    let response :Movie[]|any;
    let spy = spyOn(service,'getAllMovies').and.returnValue(of(userResponse));

    service.getAllMovies().subscribe(res => {
        response = res;
    });

    expect(response).toEqual(userResponse);
    expect(spy).toHaveBeenCalled();
  });


  it('should return a single movie by calling get api', () => {
    const userResponse : Movie|any= {
      movieId: 201,
      movieName:"Titanic",
      theaterName: "Inox",
      totalSeats:100,
      totalBookedSeats:0,
      totalAvailableSeats:100, 
      movieStatus:"BOOK_ASAP",
      tickets:[]
    };
    let response;
    let spy= spyOn(service, 'getByIdMovie').and.returnValue(of(userResponse));
    service.getByIdMovie(201).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
    expect(spy).toHaveBeenCalled();
  });


  it('should add a movie by calling post api', () => {
    const userResponse : Movie|any= {
      movieId: 201,
      movieName:"Titanic",
      theaterName: "Inox",
      totalSeats:100,
      totalBookedSeats:0,
      totalAvailableSeats:100, 
      movieStatus:"BOOK_ASAP",
      tickets:[]
    };
    let response;
    let spy =spyOn(service, 'addMovie').and.returnValue(of(userResponse));
    service.addMovie(userResponse).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
    expect(spy).toHaveBeenCalled();
  });


  it('should delete a movie by calling delete api', () => {
    const userResponse : Movie|any= {
      movieId: 201,
      movieName:"Titanic",
      theaterName: "Inox",
      totalSeats:100,
      totalBookedSeats:0,
      totalAvailableSeats:100, 
      movieStatus:"BOOK_ASAP",
      tickets:[]
    };
    let response;
    spyOn(service, 'deleteMovie').and.returnValue(of(userResponse));
    service.deleteMovie(201).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
  });
  
});

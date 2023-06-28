import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ViewMoviesComponent } from './view-movies.component';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of} from 'rxjs';


fdescribe('ViewMoviesComponent', () => {
  let component: ViewMoviesComponent;
  let fixture: ComponentFixture<ViewMoviesComponent>;
  let movieService: MovieService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoviesComponent ],
      providers:[MovieService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    movieService = TestBed.inject(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  it("should call subscribe method on getAllMovies",fakeAsync(() => {
    const response: Movie[] = [];
    let spy = spyOn(movieService, 'getAllMovies').and.returnValue(of(response))
    let subspy = spyOn(movieService.getAllMovies(), 'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  }));

  it("should getAllMovies return list of movies",fakeAsync(() => {

    const testData:any = 
    {
      "Message": "success: retrieved all movies",
      "Status Code": "OK",
      "Payload": [
          {
              "movieId": 302,
              "movieName": "Spider Man",
              "theaterName": "Inox",
              "totalSeats": 200,
              "totalBookedSeats": 0,
              "totalAvailableSeats": 200,
              "movieStatus": "BOOK_ASAP",
              "tickets": []
          },
          {
              "movieId": 301,
              "movieName": "Titanic",
              "theaterName": "Inox",
              "totalSeats": 120,
              "totalBookedSeats": 0,
              "totalAvailableSeats": 120,
              "movieStatus": "BOOK_ASAP",
              "tickets": []
          }
      ]
    }
      
    let spy = spyOn(movieService, 'getAllMovies').and.returnValue(of(testData))
    
    component.ngOnInit();
    tick();
    expect(component.movies).toBeDefined();
    expect(component.movies.length).toEqual(2);
    expect(component.movies).toEqual(testData.Payload);
  }));


  it('should call deleteMovie and delete movie object from movies array',fakeAsync(()=>{

      component.movies = [
        {
            "movieId": 302,
            "movieName": "Spider Man",
            "theaterName": "Inox",
            "totalSeats": 200,
            "totalBookedSeats": 0,
            "totalAvailableSeats": 200,
            "movieStatus": "BOOK_ASAP",
            "tickets": []
        },
        {
            "movieId": 301,
            "movieName": "Titanic",
            "theaterName": "Inox",
            "totalSeats": 120,
            "totalBookedSeats": 0,
            "totalAvailableSeats": 120,
            "movieStatus": "BOOK_ASAP",
            "tickets": []
        }
    ];

    const testResponse:any = {
      "Message": "success: movie deleted",
      "Status Code": "OK",
      "Payload": true
    }

    const spy = spyOn(movieService, 'deleteMovie').and.returnValue(of(testResponse));
    const movieId = 301;
    component.deleteMovie(movieId);

    const index = component.movies.findIndex(
      movie => movie.movieId === movieId
    );
  
    expect(index).toBeLessThan(0);
    expect(component.movies.length).toEqual(1);
  }));


});

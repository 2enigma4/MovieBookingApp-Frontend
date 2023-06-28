import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie/movie';
import { Observable } from 'rxjs';
import { MovieDto } from '../models/movieDto/movie-dto';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }



  private apiGetAll=`http://localhost:8082/api/v1.0/moviebooking/all/movies`;
  private apiPost=`http://localhost:8082/api/v1.0/moviebooking/admin/addmovie`;
  private apiGetById=`http://localhost:8082/api/v1.0/moviebooking/search`;
  private apiDelete=`http://localhost:8082/api/v1.0/moviebooking/admin/delete`;


  getAllMovies(): Observable<Array<Movie>>{
    return this.httpClient.get<Array<Movie>>(this.apiGetAll);
  }

  deleteMovie(id:number):Observable<Movie>
  {
     return this.httpClient.delete<Movie>(`${this.apiDelete}/${id}`);
  }

  getByIdMovie(id:number):Observable<Movie>
  {
     return this.httpClient.get<Movie>(`${this.apiGetById}/${id}`);
  }

  addMovie(movieDto :MovieDto) :Observable<Movie>
  {
     return this.httpClient.post<Movie>(this.apiPost, movieDto);
  }
}

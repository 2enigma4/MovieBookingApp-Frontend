import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../models/movie/movie';
import { TicketDto } from '../models/ticketDto/ticket-dto';
import { Ticket } from '../models/ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  private apiGetTickets = `http://localhost:8082/api/v1.0/moviebooking/all/tickets`;
  private apiPostBook = `http://localhost:8082/api/v1.0/moviebooking/book`;

  getAllTickets(movieId: number): Observable<Array<Ticket>>{
    return this.httpClient.get<Array<Ticket>>(`${this.apiGetTickets}/${movieId}`);
  }

  addTicket(ticketDto : TicketDto, movieId: number) :Observable<Movie>
  {
     return this.httpClient.post<Movie>(`${this.apiPostBook}/${movieId}`, ticketDto);
  }
}

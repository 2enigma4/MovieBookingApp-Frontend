import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie/movie';
import { TicketDto } from 'src/app/models/ticketDto/ticket-dto';
import { MovieService } from 'src/app/services/movie.service';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-book-tickets-user',
  templateUrl: './book-tickets-user.component.html',
  styleUrls: ['./book-tickets-user.component.css']
})
export class BookTicketsUserComponent implements OnInit {

  constructor (private route: ActivatedRoute, private movieService: MovieService, private ticketService: TicketService,
    private router: Router) {}

  movie:Movie = new Movie();
  ticketDto: TicketDto = new TicketDto();
  errorMessage:string|any;
  isError = false;

  movieId= this.route.snapshot.params['id'];

  numberOfTickets = new FormControl('',[Validators.required]);

  ngOnInit(): void {
    this.setMovieObject();
  }

  setMovieObject(){
    this.movieService.getByIdMovie(this.movieId).subscribe((data: any) => {
      if(data.Payload===undefined || data.Payload===null){
        this.errorMessage = data.message;
        this.isError=true;
      }
      else{
        this.movie = data.Payload;
      }
        
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    })
  }

  bookTickets(){
    this.ticketService.addTicket(this.ticketDto, this.movieId).subscribe((data:any) =>{

      if(data.Payload===undefined || data.Payload===null){
        this.errorMessage = data.message;
        this.isError=true;
      }
      else{
        alert(data.Message);
        this.router.navigate(['/user/view-movies']);
      }
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    })
  }

}

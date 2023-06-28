import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css'],
})
export class ViewTicketsComponent implements  OnInit {

  tickets:Array<Ticket> = [];
  row:Ticket = new Ticket();
  errorMessage:string|any;
  isError = false;

  displayedColumns: string[] = ['transactionId', 'movieName', 'theaterName', 'totalTickets', 'numberOfTickets', 'availableTickets'];
  public dataSource:[]|any;

  

  constructor( private ticketService : TicketService, private route: ActivatedRoute) { 
    
  }

  movieId= this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.ticketService.getAllTickets(this.movieId).subscribe( data => {
      this.tickets = Object.values(Object.values(data)[2]);
      this.dataSource = new MatTableDataSource(this.tickets);
    },
    error => {
      this.errorMessage = error.error.message;
      this.isError=true;
    });
  }

  
}



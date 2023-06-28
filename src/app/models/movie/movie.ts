import { Ticket } from "../ticket/ticket";

export class Movie {
  public movieId:number | any;
  public movieName:string | any;
  public theaterName:string | any;
  public totalSeats:number | any;
  public totalBookedSeats:number | any;
  public totalAvailableSeats:number | any;
  public movieStatus:string | any;
  public tickets: Array<Ticket>=[];

}

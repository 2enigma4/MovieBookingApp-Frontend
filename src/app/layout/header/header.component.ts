import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.authService.clear();
    this.route.navigate(["/login-signup"]);
  }

  public isLoggedIn(){
    return this.authService.isLoggedIn();
  }


}

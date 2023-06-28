import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title= "loginComponent";

  constructor(private userService: UserService, private authService: AuthService, private route: Router) { }

  role:any;

  ngOnInit(): void {
    
    if(this.authService.isLoggedIn())
    {
      this.role = this.authService.getRoles().at(0);
      if(this.role.name==="ROLE_USER")
        this.route.navigate(['/user/view-movies']);
      else
        this.route.navigate(['/admin/view-movies']);
    }
    else{
      this.authService.clear();
    }
      
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  hide = true;

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return 'password';
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(form: NgForm){
    const userDetails ={ 
      "email":this.email.value,
      "password":this.password.value
    }
    
    this.userService.login(userDetails).subscribe( (data : any) =>{

      if(data.Payload===undefined || data.Payload===null){
        alert(data.Message);
      }
      else{
        this.authService.setToken(data.Payload.accessToken);
        this.authService.setRole(data.Payload.user.roles);

        const role = data.Payload.user.roles[0].name;
      
        if(role === 'ROLE_ADMIN'){
          this.route.navigate(['/admin/view-movies']);
        }
        else if(role === 'ROLE_USER'){
          this.route.navigate(['/user/view-movies']);
        }
      }
      
    },
    error => {
      alert(error.error.Message);
      window.location.reload();
    })
  }

}

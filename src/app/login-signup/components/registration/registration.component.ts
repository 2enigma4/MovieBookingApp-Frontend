import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserDto } from 'src/app/models/userDto/user-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService : UserService, private route: Router) { }

  ngOnInit(): void {
  }

  userDto:UserDto= new UserDto();

  userName = new FormControl('',[Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.minLength(5)]);
  confirmPassword = new FormControl('',[Validators.required, Validators.minLength(5)]);
  secretAnswer =new FormControl('',[Validators.required]);

  hide = true;


  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'email is required';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    else if(this.password.hasError('minlength')){
      return 'Minimum 5 characters are required'
    }
    return '';
  }

  getErrorMessageConfirmPassword() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must re-enter password';
    }
    else if(this.password.hasError('minlength')){
      return 'Minimum 5 characters are required'
    }
    return '';
  }

  

  registerUser(){
    if(this.password.value!=this.confirmPassword.value){
      alert("Both passwords does not match!")
    }
    else
    {
      this.userService.register(this.userDto).subscribe( (data:any)=> {

        if(data.Payload===undefined || data.Payload===null){
          alert(data.Message);
        }
        else{
          alert(data.Message);
          this.route.navigate(['/login-signup']);
        }   
      },
      error =>{
        alert(error.error.Message);
        window.location.reload();
      })
    }
    
  }

}

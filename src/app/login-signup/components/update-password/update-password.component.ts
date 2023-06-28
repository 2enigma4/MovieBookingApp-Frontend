import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private userService: UserService, private route : Router) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  secretAnswer =new FormControl('',[Validators.required]);
  hide = true;

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageSecretAnswer() {
    if (this.secretAnswer.hasError('required')) {
      return 'You must enter a pet name';
    }
    return 'pet name';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return 'password';
  }


  updatePassword(){
    const userDetails ={ 
      "email":this.email.value,
      "password":this.password.value,
      "secretAnswer":this.secretAnswer.value
    }

    this.userService.updatePassword(userDetails).subscribe((data:any)=>{
      if(data.Payload===undefined || data.Payload===null){
        alert(data.Message);
      }
      else{
        alert(data.Message);
        this.route.navigate(['/login-signup']);
      }
      
    },
    error =>{
      alert(error.error.message);
    })


  }

}

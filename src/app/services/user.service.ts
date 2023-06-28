import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserDto } from '../models/userDto/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // requestHeaders = new HttpHeaders(
  //   {"No-Auth":"True"}
  // );
  
  private apiAuthLogin = `http://localhost:8082/auth/consumer/v1.0/login`;
  private apiAuthRegister = `http://localhost:8082/auth/consumer/v1.0/register/user`;
  private apiUpdatePassword = `http://localhost:8082/auth/consumer/v1.0/update/password`

  
  public login(loginData: any){
    return this.httpClient.post(this.apiAuthLogin,loginData);
  }
 
  public register(userData: UserDto){
    return this.httpClient.post(this.apiAuthRegister, userData);
  }

  public updatePassword(userData: any){
    return this.httpClient.post(this.apiUpdatePassword, userData);
  }

  public roleMatch(allowedRoles: string | any[]):boolean | any{
    let isMatch =false;
    const userRoles :any = this.authService.getRoles();

    if(userRoles!=null && userRoles){
      for(let i=0;i<userRoles.length;i++){
        for(let j=0;j<allowedRoles.length;j++){
          if(userRoles[i].name === allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }
          else
          {
            return isMatch;
          }
        }
      }
    }
  }

}

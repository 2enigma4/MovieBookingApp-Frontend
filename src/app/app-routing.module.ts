import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-signup/components/login/login.component';
import { RegistrationComponent } from './login-signup/components/registration/registration.component';
import { UpdatePasswordComponent } from './login-signup/components/update-password/update-password.component';
import { ViewMoviesComponent } from './admin/components/view-movies/view-movies.component';
import { ViewTicketsComponent } from './admin/components/view-tickets/view-tickets.component';
import { AddMovieComponent } from './admin/components/add-movie/add-movie.component';
import { ViewMovieUserComponent } from './user/components/view-movie-user/view-movie-user.component';
import { BookTicketsUserComponent } from './user/components/book-tickets-user/book-tickets-user.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { ForbiddenComponent } from './login-signup/components/forbidden/forbidden.component';

const routes: Routes = [
  {path:'user/book-tickets/:id', component:BookTicketsUserComponent, canActivate:[AuthGuard], data:{roles:['ROLE_USER']}},
  {path:'user/view-movies', component:ViewMovieUserComponent , canActivate:[AuthGuard], data:{roles:['ROLE_USER']}},
  {path:'admin/view-tickets/:id', component: ViewTicketsComponent, canActivate:[AuthGuard], data:{roles:['ROLE_ADMIN']}},
  {path:'admin/view-movies', component:ViewMoviesComponent, canActivate:[AuthGuard], data:{roles:['ROLE_ADMIN']}},
  {path:'forgot-password', component:UpdatePasswordComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login-signup',component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path: '', redirectTo: '/login-signup',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

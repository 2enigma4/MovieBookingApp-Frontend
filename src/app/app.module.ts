import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMoviesComponent } from './admin/components/view-movies/view-movies.component';
import { ViewTicketsComponent } from './admin/components/view-tickets/view-tickets.component';
import { LoginComponent } from './login-signup/components/login/login.component';
import { RegistrationComponent } from './login-signup/components/registration/registration.component';
import { UpdatePasswordComponent } from './login-signup/components/update-password/update-password.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './admin/components/add-movie/add-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatNativeDateModule} from '@angular/material/core';
import { BookTicketsUserComponent } from './user/components/book-tickets-user/book-tickets-user.component';
import { ViewMovieUserComponent } from './user/components/view-movie-user/view-movie-user.component';

import { FooterComponent } from './layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AuthGuard } from './auth-guard/auth.guard';
import { AuthInterceptor } from './auth-guard/auth.interceptor';
import { UserService } from './services/user.service';
import { HeaderComponent } from './layout/header/header.component';
import { ForbiddenComponent } from './login-signup/components/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMoviesComponent,
    ViewTicketsComponent,
    LoginComponent,
    RegistrationComponent,
    UpdatePasswordComponent,
    AddMovieComponent,
    BookTicketsUserComponent,
    ViewMovieUserComponent,
    HeaderComponent,
    FooterComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,
    MatDialogModule,MatDividerModule,MatExpansionModule,MatFormFieldModule,MatIconModule,MatInputModule,
    MatListModule,MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatSelectModule,MatSidenavModule,
    MatSlideToggleModule,MatSortModule,MatTableModule,MatTreeModule, MatNativeDateModule, MatToolbarModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

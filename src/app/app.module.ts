import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { SearchPipe } from './search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MoviecardComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    MovieDetalisComponent,
    NetworkComponent,
    RegisterComponent,
    NotFoundComponent,
    MoviesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

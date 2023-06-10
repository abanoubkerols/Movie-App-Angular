import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { RouteToHomeGuard } from './route-to-home.guard';
import { RouteToHomepgeGuard } from './route-to-homepge.guard';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"network",component:NetworkComponent},
  {path:"contact",component:ContentComponent},
  {path:"login",component:LoginComponent},
  {path:"rigister",component:RegisterComponent},
  {path:"moviedtalis/:id",component:MovieDetalisComponent},
  {path:"movies",component:MoviesComponent},
  {path:"**",component:NetworkComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

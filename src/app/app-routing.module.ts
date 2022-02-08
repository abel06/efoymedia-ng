import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { AuthGuardService } from './components/auth/services/guards/auth-guard.service';
import { EntertainmentComponent } from './components/features/entertainment/entertainment.component';
import { HomeComponent } from './components/features/home/home-page/home.component';
import { MovieComponent } from './components/features/movie/movie.component';
import { MusicComponent } from './components/features/music/music.component';
import { NewsComponent } from './components/features/news/news.component';
import { ReligiousComponent } from './components/features/religious/religious.component';
import { SearchviewComponent } from './components/features/searchview/searchview.component';
import { SocialComponent } from './components/features/social/social.component';
import { SongComponent } from './components/features/song/song.component';



const routes: Routes = [
  { path: 'sign-in', component: LogInComponent },
  { path: 'sign-up', component: RegisterComponent },
  // { path: '', component: HomeComponent 
  { path: '', canActivate: [AuthGuardService], component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'news', component: NewsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'social', component: SocialComponent },
  { path: 'home', component: HomeComponent },
  { path: 'religious', component: ReligiousComponent },
  { path: 'song', component: SongComponent },
  { path: 'search', component: SearchviewComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

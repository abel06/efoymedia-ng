import { NgModule, SimpleChange } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/core/header/header.component';
import { StyleManagerService } from './services/style-manager.service';
import { ThemeService } from './services/theme.service';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';

import {LayoutModule} from '@angular/cdk/layout';
import {MatDividerModule} from '@angular/material/divider';
import { InfiniteScrollComponent } from './components/shared/infinite-scroll/infinite-scroll.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EntertainmentComponent } from './components/features/entertainment/entertainment.component';
import { LogInComponent } from './components/auth/login/login.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { AuthInterceptor } from './interceptors/auth-interceptors';
import { SafePipe } from './utils/safe.pipe';
import { RegisterComponent } from './components/auth/register/register.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { MovieComponent } from './components/features/movie/movie.component';
import { MusicComponent } from './components/features/music/music.component';
import { NewsComponent } from './components/features/news/news.component';
import { SocialComponent } from './components/features/social/social.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SearchbarComponent } from './components/shared/searchbar/searchbar.component';
import { VideoComponent } from './components/shared/video/video.component';
import { VideosContainerComponent } from './components/shared/videos-container/videos-container.component';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { HomeComponent } from './components/features/home/home-page/home.component';

import { EffectsModule } from '@ngrx/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import {StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { ReligiousComponent } from './components/features/religious/religious.component';
import { SongComponent } from './components/features/song/song.component';
import { SearchviewComponent } from './components/features/searchview/searchview.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent, 
    HeaderComponent,
    SearchbarComponent,
    SidebarComponent,
    InfiniteScrollComponent,
    VideoComponent,
    VideosContainerComponent,
    MusicComponent,
    MovieComponent,
    NewsComponent,
    EntertainmentComponent,
    SocialComponent,
    LogInComponent,
    RegisterComponent,
    SafePipe,
    ReligiousComponent,
    SongComponent,
    SearchviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    LayoutModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgbModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    StoreModule.forRoot({}),
    StoreModule.forFeature('home',reducers),
    

    StoreDevtoolsModule.instrument({maxAge:25,logOnly:environment.production}),
    // ...modules
  ],
  providers: [StyleManagerService, ThemeService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

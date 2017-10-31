import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GamesModule } from './games/games.module';
import { gameReducers } from './games/store/game.reducers';
import { GamesComponent } from './games/games.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    GamesComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GamesModule,
    AppRoutingModule,
    StoreModule.forRoot({games: gameReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

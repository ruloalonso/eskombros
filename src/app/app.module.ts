import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { AppRoutingModule } from './app-routing.module';
import { GameService } from './games/game.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GamesModule,
    AppRoutingModule,
  ],
  providers: [
    GameService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { GameStartComponent } from './game-start/game-start.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import { SharedModule } from '../shared/shared.module';
import { GameListComponent } from './game-list/game-list.component';
import { GamesComponent } from './games.component';

@NgModule({
  declarations: [
    GamesComponent,
    GameStartComponent,
    GameEditComponent,
    GameDetailComponent,
    GameItemComponent,
    GameListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GamesRoutingModule,
    HttpModule,
    SharedModule
  ]
})
export class GamesModule {}

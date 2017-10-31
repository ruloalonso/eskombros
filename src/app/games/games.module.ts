import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

import { GameStartComponent } from './game-start/game-start.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesRoutingModule } from './games-routing.module';
import { gameReducers } from './store/game.reducers';

@NgModule({
  declarations: [
    GameStartComponent,
    GameEditComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', gameReducers),
    // EffectsModule.forFeature([GameEffects])
  ]
})
export class GamesModule {}

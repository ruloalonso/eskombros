import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameStartComponent } from './game-start/game-start.component';

// import { AuthGuard } from '../auth/auth-guard.service';


const gamesRoutes: Routes = [
  { path: '', component: GamesComponent, children: [
    { path: '', component: GameStartComponent },
    { path: 'new', component: GameEditComponent },
    { path: ':id', component: GameDetailComponent },
    { path: ':id/edit', component: GameEditComponent, },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(gamesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    // AuthGuard
  ]
})
export class GamesRoutingModule {}

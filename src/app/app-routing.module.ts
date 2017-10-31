import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { GamesComponent } from './games/games.component';

const appRoutes: Routes = [
  { path: '', component: GamesComponent },
  // { path: 'games', loadChildren: './games/games.module#GamesModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

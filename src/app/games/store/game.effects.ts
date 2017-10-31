import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as GameActions from '../store/game.actions';
import { Game } from '../game.model';
import * as fromGame from '../store/game.reducers';

@Injectable()
export class GameEffects {
  @Effect({dispatch: false})
  gameStore = this.actions$
    .ofType(GameActions.ADD_GAME)
    .withLatestFrom(this.store.select('games'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', state.recipes, {reportProgress: true});
      return this.httpClient.request(req);
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<any>) {}
}

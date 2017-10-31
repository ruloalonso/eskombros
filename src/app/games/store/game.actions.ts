import { Action } from '@ngrx/store';

import { Game } from '../game.model';

export const ADD_GAME = 'ADD_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const DELETE_GAME = 'DELETE_GAME';

export class AddGame implements Action {
  readonly type = ADD_GAME;

  constructor(public payload: Game) {}
}

export class UpdateGame implements Action {
  readonly type = UPDATE_GAME;

  constructor(public payload: {index: number, updatedGame: Game}) {}
}

export class DeleteGame implements Action {
  readonly type = DELETE_GAME;

  constructor(public payload: number) {}
}

export type GameActions = AddGame | UpdateGame | DeleteGame;

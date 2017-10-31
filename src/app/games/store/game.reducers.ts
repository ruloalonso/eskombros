import { Game } from '../game.model';
import * as GameActions from './game.actions';

export interface State {
  games: Game[];
}

const initialState: State = {games: []};

export function gameReducers(state = initialState, action: GameActions.GameActions) {
  switch (action.type) {
    case (GameActions.ADD_GAME):
      return {
        ...state,
        games: [...state.games, action.payload]
      };
    // case (GameActions.UPDATE_GAME):
    //   const game = state.games[action.payload.index];
    //   const updatedGame = {
    //     ...game,
    //     ...action.payload.updatedGame
    //   };
    //   const games = [...state.games];
    //   games[action.payload.index] = updatedGame;
    //   return {
    //     ...state,
    //     games: games
    //   };
    // case (GameActions.DELETE_GAME):
    //   const oldGames = [...state.games];
    //   oldGames.splice(action.payload, 1);
    //   return {
    //     ...state,
    //     games: oldGames
    //   };
    default:
      return state;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Game } from './game.model';

@Injectable()
export class GameService {
  gamesChanged = new Subject<Game[]>();
  private games: Game[] = [];

  constructor() {}

  addGame(game: Game) {
    this.games.push(game);
    this.gamesChanged.next(this.games.slice())
    ;
  }
  getGames() {
    return this.games.slice();
  }
  setGames(games: Game[]) {
    this.games = games;
    this.gamesChanged.next(this.games.slice());
  }
}

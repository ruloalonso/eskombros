import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { GameService } from '../games/game.service';
import { Game } from '../games/game.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private gameService: GameService) {
  }

  storeGames() {
    return this.http.put('https://eskombros-club.firebaseio.com/games.json', this.gameService.getGames());
  }

  // storeGame(game: Game) {
  //   return this.http.post('https://eskombros-club.firebaseio.com/games.json', game);
  // }

  getGames() {
    this.http.get('https://eskombros-club.firebaseio.com/games.json')
      .map(
        (response: Response) => {
          console.log(response);
          const games: Game[] = response.json();
          console.log(response);
          return games;
        }
      )
      .subscribe(
        (games: Game[]) => {
          this.gameService.setGames(games);
        }
      );
  }
}

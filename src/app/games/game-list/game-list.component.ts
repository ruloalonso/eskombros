import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../game.model';
import { Subscription } from 'rxjs/Subscription';

import { GameService } from '../game.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[];
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService,
              private dataStorageService: DataStorageService ) { }

  ngOnInit() {
    this.dataStorageService.getGames();
    this.subscription = this.gameService.gamesChanged
      .subscribe(
        (games: Game[]) => {
          this.games = games;
        }
      );
    this.games = this.gameService.getGames();
  }

  onNewGame() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { places, rivals, players } from '../../shared/data.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  id: number;
  places = places;
  rivals = rivals;
  players = players;
  gameForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private gameService: GameService) {
    // this.createForm();
  }

  private initForm() {
    this.gameForm = this.formBuilder.group({
      rival: '',
      place: '',
      eskScore: '',
      rivScore: '',
      date: '',
      plays: new FormArray([])
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
        }
      );
  }

  onAddPlay() {
    (<FormArray>this.gameForm.get('plays')).push(
      new FormGroup({
        'player': new FormControl(),
        'threeMade': new FormControl(),
        'twoMade': new FormControl(),
        'freeMade': new FormControl(),
        'freeAtt': new FormControl(),
        'foul': new FormControl(),
        'tech': new FormControl(),
      })
    );
  }

  onSubmit() {
    console.log('Enviado!! ; ' + this.gameForm.value);
    this.gameService.addGame(this.gameForm.value);
      // .subscribe(
      //   (response) => console.log(response),
      //   (error) => console.log(error)
      // );
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeletePlay() {
    console.log('Player deleted');
  }
}

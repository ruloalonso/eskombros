import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as GameActions from '../store/game.actions';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  id: number;
  gameForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<any>) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onSubmit() {
    this.store.dispatch(new GameActions.AddGame(this.gameForm.value));
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // getControls() {
  //   return (<FormArray>this.gameForm.get('plays')).controls;
  // }
  //
  // onDeletePlay(index: number) {
  //   (<FormArray>this.gameForm.get('plays')).removeAt(index);
  // }
}

import { Play } from '../shared/play.model';

export class Game {
  public date: Date;
  public place: string;
  public rivName: string;
  public eskScore: number;
  public rivScore: number;
  public plays: Play[];

  constructor(date: Date, place: string, rivName: string, eskScore: number,
              rivScore: number, plays: Play[]) {
    this.date = date;
    this.place = place;
    this.rivName = rivName;
    this.eskScore = eskScore;
    this.rivScore = rivScore;
    this.plays = plays;
  }
}

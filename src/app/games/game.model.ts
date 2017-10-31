import { Play } from '../shared/play.model';

export class Game {
  public date: Date;
  public place: string;
  public rival: string;
  public eskscr: number;
  public rivscr: number;
  public plays: Play[];

  constructor(date: Date, place: string, rival: string, eskscr: number,
              rivscr: number, plays: Play[]) {
    this.date = date;
    this.place = place;
    this.rival = rival;
    this.eskscr = eskscr;
    this.rivscr = rivscr;
    this.plays = plays;
  }
}

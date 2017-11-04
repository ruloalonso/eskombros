export class Play {
  public player: number;
  public threeMade: number;
  public twoMade: number;
  public freeMade: number;
  public freeAtt: number;
  public foul: number;
  public tech: number;

  constructor(player: number, threem: number, twom: number, freem: number, freea: number, foul: number, tech: number) {
    this.player = player;
    this.threeMade = threem;
    this.twoMade = twom;
    this.freeMade = freem;
    this.freeAtt = freea;
    this.foul = foul;
    this.tech = tech;
  }
}

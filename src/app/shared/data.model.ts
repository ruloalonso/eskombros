export class Player {
  id: number;
  name: string;
  photoURL: string;
  plays: Play[];
  height: number;
  weight: number;
  position: string;
}

export class Play {
  player: Player;
  threeMade: number;
  twoMade: number;
  freeMade: number;
  freeAtt: number;
  foul: number;
  tech: number;
}

export class Game {
  date: Date;
  place: string;
  rivName: string;
  eskScore: number;
  rivScore: number;
  plays: Play[];
}

export const places = ['Vicente del Bosque', 'La Masó'];
export const rivals = ['Sin Nombre', 'Fernando Martín', 'Betrogal', 'Maestros Camiseros', 'D20', 'Veteranos', 'La Mansión', 'Los Sobaos', 'Basket Lacoma'];
export const players = ['Buri', 'Chino', 'Coke', 'Cuesta', 'Dani', 'Davoid', 'Gallo', 'Gontxu', 'Gor', 'Gorka', 'Kikos', 'Lorry', 'Mendi', 'Morzis', 'Nachete', 'Pilas', 'Pitu', 'Plen', 'Perry', 'Rulo'];

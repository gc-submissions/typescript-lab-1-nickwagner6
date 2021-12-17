export class Player {
  name: string;
  jersey: number;
  //you can have preset values so my new player will always have 0 years in league
  yearsInLeague: number = 0;
  constructor(name: string, jersey: number) {
    this.name = name;
    this.jersey = jersey;
  }

  //getter with a return type
  getName(): string {
    return this.name;
  }
  getJersey(): number {
    return this.jersey;
  }
  //setter
  getYearsInLeague(): number {
    return this.yearsInLeague;
  }
  //setter
  setJersey(newJerseyNumber: number): void {
    this.jersey = newJerseyNumber;
  }
  //other methods
  playerAnniversary(): void {
    this.yearsInLeague++;
  }
}

let nick: Player = new Player("Nick", 6);
//i could console.log nick.name or i can do nick.getName()
console.log(nick.getName());
console.log(nick.yearsInLeague);
nick.setJersey(13);
console.log(nick.getJersey());
nick.playerAnniversary();
console.log("Years in league: " + nick.getYearsInLeague());

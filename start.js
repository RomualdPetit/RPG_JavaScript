const Zodd = new Fighter("Zodd");
const Pippin = new Paladin("Pippin");
const Isidro = new Monk("Isidro");
const Guts = new Berserker("Guts");
const Serpico = new Assassin("Serpico");
const Shierke = new Wizard("Shierke");
const Griffith = new Godhand("Griffith");
let players = [Zodd, Pippin, Isidro, Guts, Serpico, Shierke, Griffith];

const GAME = new Game(players);

alert("Bienvenue sur les Terres du Midland");
alert("Appui sur entrer pour commencer la partie");

while (GAME.turnLeft > 0 && !GAME.DidSomeoneWin()) {
  GAME.newTurn();
  let turn = new Turn(players, GAME.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

GAME.gameOver();

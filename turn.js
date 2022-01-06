class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft);
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`Tour ${this.turnNumber}`);
    this.setHasplayedToFalse(this.playersAlive());
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, c'est ton tour`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerResponse = prompt(
      `${player.name}, Que veux tu faire ?\nAppuie sur [0] pour voir tes stats \nAppuie sur [1] pour voir les stats des autres joueurs \nAppuie sur [2] pour attaquer un autre joueur \nAppuie sur [3] pour voir ton attaque spécial \nAppuie sur [4] pour envoyer ton attaque spécial`
    );

    switch (playerResponse) {
      case "0":
        this.watchStatsCurrentPlayer(player);
        this.playerActionsMenu(player);
        break;

      case "1":
        this.watchStatsOtherPlayers(player);
        this.playerActionsMenu(player);
        break;

      case "2":
        player.dealDamage(this.chooseTarget(player));
        break;

      case "3":
        player.seeSpecialMove();
        this.playerActionsMenu(player);
        break;

      case "4":
        if (
          player.constructor.name == "Fighter" ||
          player.constructor.name == "Paladin" ||
          player.constructor.name == "Assassin" ||
          player.constructor.name == "Godhand" ||
          player.constructor.name == "Wizard" ||
          player.constructor.name == "Berserker" ||
          player.constructor.name == "Monk"
        ) {
          player.specialMove(this.chooseTarget(player));
        } else {
          player.specialMove();
        }
        break;

      default:
        alert("Désolé, essaye une autre réponse !");
        this.playerActionsMenu(player);
    }
    player.hasplayed = true;
  }

  chooseTarget(player) {
    let targets = this.playersAlive().filter((target) => target != player);

    let indexes = Array.from(Array(targets.length).keys());

    let question = `${player.name}, Qui veux-tu attaquer ?`;
    for (let i in targets) {
      question += `\nAppuie sur [${i}] pour attaquer ${targets[i].name}`;
    }
    let playerResponse = prompt(question);

    if (indexes.includes(parseInt(playerResponse))) {
      return targets[parseInt(playerResponse)];
    } else {
      alert("Désolé, essaye une autre réponse!");
      this.chooseTarget(player);
    }
  }

  playersAliveAndHaventPlayed() {
    return this.playersAlive().filter((player) => player.hasplayed == false);
  }

  turnPlay() {
    while (
      this.playersAliveAndHaventPlayed().length > 0 &&
      this.playersAlive().length > 1
    ) {
      this.playerActionsMenu(
        this.pickPlayerRandomly(this.playersAliveAndHaventPlayed())
      );
    }
  }

  watchStatsOtherPlayers(player) {
    this.watchStats(this.playersAlive().filter((p) => p != player));
  }

  watchStatsCurrentPlayer(player) {
    this.watchStats(this.playersAlive().filter((p) => p == player));
  }

  setHasplayedToFalse(players) {
    players.map((player) => (player.hasplayed = false));
  }

  deactivateFigthersSpe(players) {
    players
      .filter((player) => player.constructor.name == "Fighter")
      .map((player) => player.resetSpe());
  }
}

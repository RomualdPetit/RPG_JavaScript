class Berserker extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 10), (dmg = 6), (mana = 0), status, hasplayed);
    this.spe = "Folie sanguinaire";
  }

  specialMove() {
    this.dmg += 5;
    this.hp -= 1;
    alert(
      `${this.name} utlise ${this.spe}. \n${this.name} gagne 5 points de dégats et 1 point de vie.`
    );
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n Augmente vos points de dégats de 5. \n Vous perdez 1 points de vie par utilisation`
    );
  }
}

class Monk extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 8), (dmg = 2), (mana = 200), status, hasplayed);
    this.spe = "Méditation";
  }

  specialMove() {
    this.hp += 8;
    this.mana -= 25;
    alert(`${this.name} utilise ${this.spe} il gagne 8 points de vie.`);
  }
  seeSpecialMove() {
    alert(`${this.spe}\n Gagne 8 points de vie. \n Coute 25 points de mana.`);
  }
}

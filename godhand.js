class Godhand extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 20), (dmg = 5), (mana = 280), status, hasplayed);
    this.spe = "Eclipse";
  }

  specialMove(victim) {
    this.dmg = 500;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    this.mana -= 320;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n Inflige 500 points de dégats a l'ennemie \n Coute 320 points de mana.`
    );
  }
}

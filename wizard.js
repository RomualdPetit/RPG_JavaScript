class Wizard extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 10), (dmg = 2), (mana = 200), status, hasplayed);
    this.spe = "Fireball";
  }

  specialMove(victim) {
    this.dmg = 7;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}.`);
    this.dealDamage(victim);
    this.dmg = 2;
    this.mana -= 25;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n- Inflige 7 de dégats à l'ennemie.\n- Coute 25 points de mana.`
    );
  }
}

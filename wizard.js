class Wizard extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 10), (dmg = 2), (mana = 200), status, hasplayed);
    this.spe = "Fireball";
  }

  specialMove(victim) {
    this.dmg = 7;
    alert(`${this.name} uses ${this.spe} on ${victim.name}.`);
    this.dealDamage(victim);
    this.dmg = 2;
    this.mana -= 25;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n- Causes 7 damage points to the enemy.\n- Costs 25 mana points.`
    );
  }
}

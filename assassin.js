class Assassin extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 6), (dmg = 6), (mana = 20), status, hasplayed);
    this.spe = "Shadow hit";
  }

  specialMove(victim) {
    this.dmg = 7;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    this.damage = 6;
    this.mana -= 20;
  }

  takeDamage(damage) {
    if (this.spe == 1) {
      damage = 0;
      alert(
        `${this.name} ne prends aucun dégat. \`n Il reste ${this.hp} à ${this.name}`
      );
    } else {
      this.hp -= damage;
      alert(
        `${this.name} reçoit ${damage} points de dégats. \n Il reste ${this.hp} points de vie à ${this.name}`
      );
    }
  }
}

class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 12), (dmg = 4), (mana = 40), status, hasplayed);
    this.spe = "Dark vision";
    this.activated = false;
  }

  specialMove(victim) {
    this.dmg = 5;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 4;
    this.speactived = true;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n Inflige 5 points de dégats à l'ennemie \n Réduit les dégats de 2 points jusqu'à la fin du tour.`
    );
  }

  takeDamage(damage) {
    if (this.actived == true) {
      damage -= 2;
      this.hp -= damage;
      alert(
        `${this.name} utilise ${this.spe} pour réduire les dégats. \n${this.name} ne reçoit que ${damage} points de dégats \n il reste ${this.hp} hp à ${this.name}`
      );
    } else {
      this.hp -= damage;
      alert(
        `${this.name} reçoit ${damage} points de dégats. \n il reste ${this.hp} hp à ${this.name}`
      );
    }
  }

  resetSpe() {
    this.activated = false;
  }
}

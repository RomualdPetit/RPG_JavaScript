class Character {
  constructor(name, hp, dmg, mana, status = "playing", hasplayed = false) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.hasplayed = hasplayed;
  }

  takeDamage(damage) {
    this.hp -= damage;
    alert(
      `${this.name} à reçu ${damage} points de dégats. \n${this.name} n'a plus que ${this.hp} points de vie.`
    );
  }

  dealDamage(victim) {
    alert(
      `${this.name} inflige ${this.dmg} points de dégats à ${victim.name}.`
    );
    victim.takeDamage(this.dmg);

    if (this.didItKill(victim) == true) {
      this.mana += 20;
      victim.changeStatusToLoser();
      alert(
        `${this.name} gagne 20 points de mana pour avoir tué ${victim.name}`
      );
    }
  }

  isCharacterKilled() {
    return this.hp <= 0 ? true : false;
  }

  changeStatusToLoser() {
    if (this.isCharacterKilled() == true) {
      this.status = "Perdu";
      alert(`${this.name} a été tué`);
    }
  }

  changeStatusToWinner() {
    if (this.isCharacterKilled() == false) {
      this.status = "winner";
      alert(`Le gagnant est : ${this.name}`);
    }
  }

  didItKill(victim) {
    return victim.isCharacterKilled() == true ? true : false;
  }
}

class Paladin extends Character {
  constructor(name, hp, dmg, mana, status) {
    super(name, (hp = 16), (dmg = 3), (mana = 60), status);
    this.spe = "Healing lighting";
  }

  specialMove(victim) {
    this.dmg = 4;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    alert(`${this.name} gagne 5 points de vie`);
    this.dmg = 3;
    this.hp += 5;
    this.mana -= 40;
  }

  seeSpecialMove() {
    alert(
      `${this.spe} \n Inflige 4 points de dégats à l'ennemie. \n Restaure 5 points de vie. \n Coute 40 points de mana.`
    );
  }
}

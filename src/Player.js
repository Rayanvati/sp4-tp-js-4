/*

conseil:
- la majorité des fonctions de cette classe peuvent être codées en 1 ou 2 ligne(s)
- rappel : D.R.Y !

helpers:
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/constructor
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/return
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_d%C3%A9faut_des_arguments

*/

module.exports = class Player {
  constructor(name) {
    this.name = name || "Unknown Player";
    this.xp = 0;
    this.life = 100;
    this.force = 50;
  }

  // methods : 
  // attack
  // getXP
  // setXP
  // getName
  // setName
  // getLife
  // setLife
  // claimVictory
  // die
  // threat

  attack() {
    return Math.floor(Math.random() * (this.force - 1) + 1);
  }

  getXP() {
    return this.xp;
  }

  setXP(ennemyXp) {
    this.xp += ennemyXp;
  }

  getName() {
    return this.name;
  }

  setName(n) {
    this.name = n;
  }

  getLife() {
    return this.life;
  }

  setLife(lifePoint) {
    this.life += lifePoint;
    if (this.life <= 0) return this.die();
    else return this.getLife();
  }

  claimVictory() {
    return `Victory is mine !!!`;
  }

  die() {
    return `I... Failed...`;
  }

  threat(ennemyName = "you fool") {
    return `You will perish soon, ${ennemyName} !!!`;
  }
};

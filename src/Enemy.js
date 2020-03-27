/*

conseil:
la majorité des fonctions de cette classe peuvent être codées en 1 ou 2 ligne(s)


helpers:
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/constructor
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/return
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_d%C3%A9faut_des_arguments

*/

class Enemy {
  constructor(name, xp, life, force) {
    if (!name || typeof name !== "string")
      throw new TypeError("nme should be a string");

    if (isNaN(xp) || isNaN(life) || isNaN(force))
      throw new TypeError("xp, life and force should numbers (non NaN)");

    this.name = name;
    this.xp = Number(xp);
    this.life = Number(life);
    this.force = Number(force);
  }

  // methods :
  // attack
  // setLife
  // getXP
  // threat
  // die

  attack() {
    return Math.floor(Math.random() * (this.force - 1) + 1);
  }

  getLife() {
    return this.life;
  }

  setLife(point) {
    this.life -= point;
    if (this.life <= 0) return this.die();
    else return this.getLife();
  }

  getXP() {
    return this.xp;
  }

  threat(msg = "Don't underestimate me !") {
    return msg;
  }

  die(msg = "Oh nooooo !") {
    return msg;
  }
}

class Skull extends Enemy {
  constructor() {
    super("Skull", 10, 50, 30);
  }

  threat() {
    return super.threat("You will join our army soon !");
  }

  die() {
    return super.die("We are to way many, you'll never survive !");
  }
}

class Orc extends Enemy {
  constructor() {
    super("Orc", 100, 200, 60);
  }

  threat() {
    return super.threat("ME KILL HUMAN");
  }

  die() {
    return super.die("GROOOAAAARRR");
  }
}

module.exports = {
  Enemy,
  Skull,
  Orc
};

// WARNING: Implementer les classes Player + Enemy avant de commencer cette itération
const Player = require("./../src/Player");
const { Enemy, Skull, Orc } = require("./../src/Enemy");

// Iteration 7

describe("A set of tests checking Player AND Ennemies classes implementation", () => {
  it("Should return update the player's xp after a combat", () => {
    const player = new Player("Solo Coder");
    const skull = new Skull();
    const orc = new Orc();
    const msg1 = `${player.name} says: ${player.threat(skull.name)}`;
    const msg2 = `${skull.name} says: ${skull.threat()}`;

    expect(msg1).toBe("Solo Coder says: You will perish soon, Skull !!!");
    expect(msg2).toBe("Skull says: You will join our army soon !");

    do {
      player.setLife(skull.attack());
      skull.setLife(player.attack());
    } while (skull.getLife() >= 0 || skull.getLife() >= 0);

    if (skull.getLife() <= 0) console.log('Skull says: ' + skull.die());
    else console.log("Solo Coder says: " + player.die());

    const msg3 = `${player.name} says: ${player.threat(orc.name)}`;
    const msg4 = `${orc.name} says: ${orc.threat()}`;

    expect(msg3).toBe("Solo Coder says: You will perish soon, Orc !!!");
    expect(msg4).toBe("Orc says: ME KILL HUMAN");

    player.setLife(skull.attack());
    skull.setLife(player.attack());

    console.log(player.getLife(), orc.getLife())
  });

  it("Should return the correct values if the player is attacked by several skulls", () => {
    const player = new Player();
    const skulls = [];
    const random = Math.floor(Math.random() * (10 - 1) + 1);
    var damages = 0;

    for (let i = 0; i < random; i++) {
      skulls.push(new Skull());
      damages += skulls[i].attack();
    }

    const memory = player.getLife() - damages;

    if (damages >= player.getLife()) {
      // si player n'a plus de points de vie
      expect(player.setLife(-damages)).toBe(player.die());
    } else {
      // si player a encore des points de vie
      expect(player.setLife(-damages)).toBe(memory);
    }
  });
});

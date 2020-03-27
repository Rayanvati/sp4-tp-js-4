const Player = require("./../src/Player");

// Iteration 1

describe("A set of tests checking the base Player class implementation", () => {
  it("Should be defined (as a JS class)", () => {
    expect(Player).toBeDefined();
    expect(typeof Player).toBe("function");
  });

  it("Should be a JS class", () => {
    const player = new Player();
    expect(player).toBeInstanceOf(Player);
  });

  it("Should be a called the right way (with 'new' keyword)", () => {
    expect(() => Player()).toThrow(TypeError);
  });

  it("Should return the appropriate string", () => {
    const player = new Player();
    expect(player.name).toBe("Unknown Player");
  });

  it("Should return the appropriate string (name)", () => {
    const player = new Player("Serafina");
    expect(player.name).toBe("Serafina");
  });

  it("Should return the appropriate string (name)", () => {
    const player = new Player("Yoda");
    expect(player.name).toBe("Yoda");
  });

  it("Should set the correct default values", () => {
    const player1 = new Player("Beast");
    const player2 = new Player("Beauty");

    expect(player1).toEqual({
      name: "Beast",
      xp: 0,
      life: 100,
      force: 50
    });

    expect(player2).toEqual({
      name: "Beauty",
      xp: 0,
      life: 100,
      force: 50
    });
  });
});

// Iteration 2

describe("A set of tests checking the Player's class methods implementation", () => {
  it("Should implement a getName method", () => {
    const player = new Player();
    expect(typeof player.getName).toBe("function");
  });

  it("Should return the correct string (name) with getName()", () => {
    const player = new Player("Bilbo");
    expect(player.getName()).toBe("Bilbo");
  });

  it("Should implement a setName method", () => {
    const player = new Player();

    expect(player.getName()).toBe("Unknown Player");

    player.setName("Doctor Doom");

    expect(player.getName()).toBe("Doctor Doom");
  });

  it("Should implement a getXP method", () => {
    const player = new Player();
    expect(typeof player.getXP).toBe("function");
  });

  it("Should implement a setXP method", () => {
    const player = new Player();
    expect(typeof player.setXP).toBe("function");
  });

  it("Should increment the experience points the expected way", () => {
    const player = new Player("KikooLoLDu67");

    expect(player.getXP()).toBe(0);

    player.setXP(10);

    expect(player.xp).toBe(10);

    player.setXP(40);

    expect(player.xp).toBe(50);
  });

  it("Should implement a getLife method", () => {
    const player = new Player("Aragorn");
    expect(typeof player.getLife).toBe("function");
  });

  it("Should return the correct number with getLife()", () => {
    const player = new Player("Eva Storm");
    expect(player.getLife()).toBe(100);
  });

  it("Should implement a die method", () => {
    const player = new Player();
    expect(typeof player.die).toBe("function");
  });

  it("Should send a death message", () => {
    const player = new Player("Kim Lazy");
    expect(player.die()).toBe("I... Failed...");
  });

  it("Should implement a setLife method", () => {
    const player = new Player("The Lone Wolf");
    expect(typeof player.setLife).toBe("function");
  });

  it("Should update player's life points and return the updated number", () => {
    const player = new Player("Alakazam");
  
    expect(player.setLife(-10)).toBe(90);
    expect(player.setLife(30)).toBe(120);
    expect(player.setLife(-60)).toBe(60);
  });

  it("Should send a message if player's life is less than or equal to 0", () => {
    const player = new Player("Luna Black");
    expect(player.setLife(-100)).toBe("I... Failed...");
  });

  it("Should return a number between 1 and the Player's force", () => {
    const player = new Player("Do Did Done");
    expect(typeof player.attack()).toBe("number");
    expect(player.attack()).toBeGreaterThanOrEqual(1);
    expect(player.attack()).toBeLessThanOrEqual(player.force);
  });

  it("Should implement a claimVictory method", () => {
    const player = new Player("Electra");
    expect(typeof player.claimVictory).toBe("function");
  });

  it("Should return a victory message", () => {
    const player = new Player("DoWhile Break");
    expect(player.claimVictory()).toBe("Victory is mine !!!");
  });

  it("Should implement a threat method", () => {
    const player = new Player();
    expect(typeof player.threat).toBe("function");
  });

  it("Should return the appropriate message", () => {
    const player = new Player("Shadow Lady");
    expect(player.threat()).toBe("You will perish soon, you fool !!!");
  });

});

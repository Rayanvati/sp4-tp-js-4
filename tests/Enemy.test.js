const { Enemy, Skull, Orc } = require("./../src/Enemy");

// Iteration 3

describe("A set of tests checking the base Enemy class implementation", () => {
  it("Should be defined", () => {
    expect(typeof Enemy).toBe("function");
  });

  it("Should be a JS class", () => {
    const villain = new Enemy("Default Enemy", 10, 100, 10);
    expect(villain).toBeInstanceOf(Enemy);
  });

  it("Should be called with the correct parameters: (name, xp, life, force)", () => {
    expect(() => new Enemy()).toThrow(TypeError);
  });

  it("Should received name as a string", () => {
    expect(() => new Enemy(null, 0, 0, 0)).toThrow(TypeError);
  });

  it("Should received xp, life and force as numbers (non NaN)", () => {
    expect(() => new Enemy("default Enemy", "foo", "bar", "baz")).toThrow(
      TypeError
    );
  });

  it("Should return the following object", () => {
    const villain = new Enemy("Magneto", 100, "90", 50);
    expect(villain).toEqual({
      name: "Magneto",
      xp: 100,
      life: 90,
      force: 50
    });
  });
});

// Iteration 4

describe("A set of tests checking the Enemy class methods implementation", () => {
  it("Should implement an attack method", () => {
    const villain = new Enemy("Soron", 100, 100, 50);
    expect(typeof villain.attack).toBe("function");
  });

  it("Should return a number between 1 and the Enemy's force", () => {

    const octopus = new Enemy("Doctor Octopus", 100, 100, 30);
    const titan = new Enemy("Titan", 100, 100, 50);

    expect(octopus.attack()).toBeGreaterThanOrEqual(1);
    expect(octopus.attack()).toBeLessThanOrEqual(30);

    expect(titan.attack()).toBeGreaterThanOrEqual(1);
    expect(titan.attack()).toBeLessThanOrEqual(50);
  });


  it("Should implement a getXP method", () => {
    const villain = new Enemy("Galactus", 100, 100, 50);
    expect(typeof villain.getXP).toBe("function");
  });

  it("Should return the correct XP", () => {
    const villain = new Enemy("Cat Woman", 100, 100, 50);
    expect(villain.getXP()).toBe(100);
  });

  it("Should implement a threat method", () => {
    const villain = new Enemy("Donald Trump", 100, 300, 40);
    expect(typeof villain.threat).toBe("function");
  });

  it("Should return the correct string", () => {
    const rs = new Enemy("Red Skull", 100, 100, 50);
    const dt = new Enemy("Donald Trump", 100, 300, 40);
    expect(dt.threat()).toBe("Don't underestimate me !");
    expect(rs.threat()).toBe("Don't underestimate me !");
  });

  it("Should implement a die method", () => {
    const villain = new Enemy("Mysterio", 100, 100, 50);
    expect(typeof villain.die).toBe("function");
  });

  it("Should return the correct string", () => {
    const ivy = new Enemy("Poison Ivy", 80, 200, 50);
    const malicia = new Enemy("Malicia", 100, 200, 40);
    expect(ivy.die()).toBe("Oh nooooo !");
    expect(malicia.die()).toBe("Oh nooooo !");
  });
});

// Iteration 5

describe("A set of tests checking the Skull child classes implementations", () => {
  const skull = new Skull();

  test("Should return the correct instance object", () => {
    expect(skull).toEqual({
      name: "Skull",
      xp: 10,
      life: 50,
      force: 30
    });
  });
  
  it("Should implement a threat method", () => {
    expect(typeof skull.threat).toBe("function");
  });

  it("Should return the correct string", () => {
    expect(skull.threat()).toBe("You will join our army soon !");
  });

  it("Should implement a die method", () => {
    expect(typeof skull.die).toBe("function");
  });

  it("Should return the correct string", () => {
    expect(skull.die()).toBe("We are to way many, you'll never survive !");
  });
});

// Iteration 6

describe("A set of tests checking the Orc child classes implementations", () => {
  const orc = new Orc();

  test("Should return the correct instance object", () => {
    expect(orc).toEqual({
      name: "Orc",
      xp: 100,
      life: 200,
      force: 60
    });
  });

  it("Should implement a threat method", () => {
    expect(typeof orc.threat).toBe("function");
  });

  it("Should return the correct message", () => {
    expect(orc.threat()).toBe("ME KILL HUMAN");
  });

  it("Should implement a die method", () => {
    expect(typeof orc.die).toBe("function");
  });

  it("Should return the correct message", () => {
    expect(orc.die()).toBe("GROOOAAAARRR");
  });
});

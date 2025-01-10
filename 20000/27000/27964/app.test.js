const { solution } = require("./app");

test('test0', () => {
  expect(solution(`4
CheddarCheese MozzarellaCheese GoudaCheese GranaPadanoCheese`)).toBe(`yummy`);
});

test('test1', () => {
  expect(solution(`4
MozzarellaCheese MozzarellaCheese MozzarellaCheese MozzarellaCheese`)).toBe(`sad`);
});

test('test2', () => {
  expect(solution(`4
CheeseBurger CheeseBall CheeseCake CheeseRavioli`)).toBe(`sad`);
});

test('test3', () => {
  expect(solution(`7
C Chess cheese Cheesa Cheesz Cheesp Cheese`)).toBe(`sad`);
});

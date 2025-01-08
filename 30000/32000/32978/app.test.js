const { solution } = require("./app");

test('test0', () => {
    expect(solution(`5
Flour Garlic Seashell Oil Butter
Seashell Oil Butter Flour`)).toBe('Garlic');
})
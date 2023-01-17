const fn = require("./fn");

test("1 더하기 1은 2야.", () => {
  expect(fn.add(1, 1)).toBe(2);
});
test("2 더하기 2는 4야.", () => {
  expect(fn.add(2, 2)).toBe(4);
});
test.skip("3 더하기 3은 6이야.", () => {
  expect(fn.add(3, 3)).toBe(6);
});
test("4 더하기 4은 8이야.", () => {
  expect(fn.add(4, 4)).toBe(8);
});

const pageCount = require("./js-algo-drawBook");

test(" text", () => {
  expect(pageCount(6, 2)).toBe(1);
});
test(" text", () => {
  expect(pageCount(5, 4)).toBe(0);
});
test(" text", () => {
  expect(pageCount(5, 1)).toBe(0);
});
test(" text", () => {
  expect(pageCount(37455, 29835)).toBe(3810);
});

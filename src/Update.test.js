const { update, MSGS } = require("./Update");

test("Update model ADD", () => {
  const origModel = 10;
  const newModel = update(MSGS.ADD, origModel);
  expect(origModel).toBe(10);
  expect(newModel).toBe(11);
});

test("Update model SUBTRACT", () => {
  const origModel = 10;
  const newModel = update(MSGS.SUBTRACT, origModel);
  expect(origModel).toBe(10);
  expect(newModel).toBe(9);
});

test("Update model ADD & SUBTRACT", () => {
  const origModel = 10;
  const newModel = update(MSGS.ADD, origModel);
  expect(origModel).toBe(10);
  expect(newModel).toBe(11);
  const nextModel = update(MSGS.SUBTRACT, newModel);
  expect(newModel).toBe(11);
  expect(nextModel).toBe(10);
});

test("Update model invalid message", () => {
  const origModel = 10;
  const newModel = update("invalidMessage", origModel);
  expect(origModel).toBe(10);
  expect(newModel).toBe(10);
});

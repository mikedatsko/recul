const Recul = require('.');
const r = new Recul();

test('init', () => {
  expect(r).toBeTruthy();
});

test('is has store property', () => {
  expect(r.store).toBeTruthy();
});

test('is reset works', () => {
  r.create('a', 1);
  r.reset();
  expect(r.read('a')).toBeUndefined();
});

test('is works "set" and "get"', () => {
  r.reset();
  r.create('a', 1);
  expect(r.read('a').value).toBe(1);
});

test('is works "on"', async () => {
  expect.assertions(1);
  r.reset();

  const a = r.create('a', 1);
  a.on(a_ => {
    expect(a_).toEqual(1);
  });

  r.create('a', 1);
});

test('is works "off"', async () => {
  expect.assertions(1);
  r.reset();
  let b = 0;

  const a = r.create('a', 0);
  const listener = a.on(value => {
    b = value;
  });

  r.create('a', 1);
  listener.off();
  r.create('a', 2);

  expect(b).toEqual(1);
});

test('is works "on" with no dispatch', async () => {
  expect.assertions(1);
  r.reset();
  let b = 0;
  const a = r.create('a', 0);

  a.on(value => {
    b = value;
  });

  r.create('a', 1);
  r.create('a', 2);
  r.create('a', 3, true);
  expect(b).toEqual(2);
});

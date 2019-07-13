const recul = require('.').recul;

test('init', () => {
  expect(recul).toBeTruthy();
});

test('is has store property', () => {
  expect(recul.store).toBeTruthy();
});

test('is reset works', () => {
  recul.setValue('a', 1);
  recul.reset();
  expect(recul.getValue('a')).toBeUndefined();
});

test('is works "setValue" and "getValue"', () => {
  recul.reset();
  recul.setValue('a', 1);
  expect(recul.getValue('a')).toBe(1);
});

test('is has immutable value for array', () => {
  recul.reset();
  recul.setValue('a', [1]);
  const a = recul.getValue('a');
  a.push(2);
  expect(recul.getValue('a')).toEqual([1]);
});

test('is has immutable value for object', () => {
  recul.reset();
  recul.setValue('a', { b: 1 });
  const a = recul.getValue('a');
  a.b = 2;
  expect(recul.getValue('a')).toEqual({ b: 1 });
});

test('is works "on"', async () => {
  expect.assertions(1);
  recul.reset();

  const a = await new Promise(resolve => {
    recul.on('a', value => {
      resolve(value);
    });
    recul.setValue('a', 1);
  });
  expect(a).toEqual(1);
});

test('is works "off"', async () => {
  expect.assertions(1);
  recul.reset();

  const a = await new Promise(resolve => {
    let i = 0;

    const listener = recul.on('a', value => {
      if (i === 1) {
        resolve(value);
      }

      i++;
    });

    recul.setValue('a', 1);
    recul.off(listener);
    recul.setValue('a', 2);
    setTimeout(() => resolve(3), 0);
  });

  expect(a).toEqual(3);
});

test('is works listener "subscribe" and "unsubscribe"', async () => {
  expect.assertions(1);
  recul.reset();

  const a = await new Promise(resolve => {
    let i = 0;

    const listener = recul.subscribe('a', value => {
      if (i === 1) {
        resolve(value);
      }

      i++;
    });

    recul.setValue('a', 1);
    listener.unsubscribe();
    recul.setValue('a', 2);
    setTimeout(() => resolve(3), 0);
  });

  expect(a).toEqual(3);
});

test('is works subscribe on dispatch', async () => {
  expect.assertions(2);
  recul.reset();

  recul.subscribe('a', value => {
    expect(recul.getValue('a')).toEqual(value);
  });

  recul.setValue('a', 1);
  recul.setValue('a', 1);
  recul.setValue('a', 1, true);
});

test('is works with hash', async () => {
  expect.assertions(2);
  recul.reset();

  recul.subscribe('a', value => {
    expect(recul.getValue('a')).toEqual(value);
  });

  recul.setValue('a', 1);
  recul.setValue('a', 1);
  recul.setValue('a', 2);
});

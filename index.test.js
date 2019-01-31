const recul = require('./index');

// const stt = new State();
//
// stt.setValue('a', 1);
// stt.setValue('b', '1');
// stt.setValue('c', true);
// stt.setValue('d', [1]);
// stt.setValue('e', {a: 123});
//
// let a = stt.getValue('a');
// let b = stt.getValue('b');
// let c = stt.getValue('c');
// let d = stt.getValue('d');
// let e = stt.getValue('e');
//
// console.log('stt', stt.store);
// console.log('---------------------');
// console.log(a, b, c, d, e);
//
// console.log('===============');
//
// a = 2;
// b = '2';
// c = false;
// d.push(2);
// e.a = 456;
//
// console.log('stt', stt.store);
// console.log('---------------------');
// console.log(a, b, c, d, e);

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

test('is has immutable value', () => {
  recul.reset();
  recul.setValue('a', [1]);
  const a = recul.getValue('a');
  a.push(2);
  expect(recul.getValue('a')).toEqual([1]);
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

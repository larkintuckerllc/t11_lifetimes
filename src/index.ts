/* eslint-disable no-console */
{
  const test = (x: number): number => x + 1;
  let r;
  console.log(`r: ${r}`); // undefined
  // r = r + 1; // CANNOT BE APPLIED
  const s = test(r);
  console.log(`s: ${s}`); // NaN
}

{
  let r;
  r = 5;
  r += 1;
  console.log(`r: ${r}`); // 6
  r = 'abc';
  const l = r.length;
  console.log(`l: ${l}`); // 3
}

{
  let r;
  {
    const x = { hello: 'world' };
    r = x;
  }
  console.log(`r: ${r.hello}`); // world
}

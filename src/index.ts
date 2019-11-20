/* eslint-disable no-console */
{
  let r;
  console.log(`r: ${r}`); // undefined
  {
    const x = { hello: 'world' };
    r = x;
  }
  console.log(`r: ${r.hello}`); // world
}

{
  let r;
  r = 5;
  r += 1;
  console.log(`r: ${r}`); // 5
  {
    const x = { hello: 'world' };
    r = x;
  }
  console.log(`r: ${r.hello}`); // world
}

interface Hello {
  hello: string;
}

{
  let r: Hello;
  // r = 5; // NOT ASSIGNABLE
  // r += 1; // NOT APPLIED
  {
    const x = { hello: 'world' };
    r = x;
  }
  console.log(`r: ${r.hello}`); // world
}

/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line
type Constructable = new (...args: any[]) => object;

interface TrA {
  toString: () => string;
}

interface TrB {
  toAnotherString: () => string;
}

interface TrC {
  toThirdString: () => string;
}

interface TrD {
  toFourthString: () => string;
}

// eslint-disable-next-line
const TrCMixin = <BC extends Constructable>(Base: BC) => {
  return class extends Base {
    toThirdString(): string {
      return 'TrC - Default';
    }
  };
};

// eslint-disable-next-line
const TrDMixin = <BC extends Constructable>(Base: BC) => {
  return class extends Base {
    toFourthString(): string {
      return 'TrD - Default';
    }
  };
};

class St0 implements TrA, TrB, TrC, TrD {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  toString(): string {
    return `TrA for St0 - Title: ${this.title}`;
  }

  toAnotherString(): string {
    return `TrB for St0 - Title: ${this.title}`;
  }

  toThirdString(): string {
    return `TrC for St0 - Title: ${this.title}`;
  }

  toFourthString(): string {
    return `TrD for St0 - Title: ${this.title}`;
  }
}

class St1 implements TrA, TrB {
  body: string;

  title: string;

  constructor(body: string, title: string) {
    this.body = body;
    this.title = title;
  }

  toString(): string {
    return `TrA for St1 - Body: ${this.body} - Title: ${this.title}`;
  }

  toAnotherString(): string {
    return `TrB for St1 - Body: ${this.body} - Title: ${this.title}`;
  }
}

const logA = (item: TrA): void => {
  const output = item.toString();
  console.log(output);
};

const logB = (item: TrB): void => {
  const output = item.toAnotherString();
  console.log(output);
};

const logC = (item: TrC): void => {
  const output = item.toThirdString();
  console.log(output);
};

const logD = (item: TrD): void => {
  const output = item.toFourthString();
  console.log(output);
};

const logAB = (item: TrA & TrB): void => {
  const output = item.toString();
  console.log(output);
  const output2 = item.toAnotherString();
  console.log(output2);
};

const returnsTrA = (): TrA => new St0('T');
const returnsTrAFlex = (option: boolean): TrA => (option ? new St0('T') : new St1('T', 'B'));

const st0 = new St0('T');
const st1 = new (TrDMixin(TrCMixin(St1)))('T', 'B');
logA(st0); // TrA for St0 - Title: T
logB(st0); // TrB for St0 - Title: T
logC(st0); // TrC for St0 - Title: T
logD(st0); // TrD for St0 - Title: T
logA(st1); // TrA for St1 - Body: T - Title: B
logB(st1); // TrB for St1 - Body: T - Title: B
logC(st1); // TrC - Default
logD(st1); // TrD - Default
logAB(st0); // TrA for St0 - Title: T TrB for St0 - Title: T
const item = returnsTrA();
logA(item); // TrA for St0 - Title: T
const item2 = returnsTrAFlex(false);
logA(item2); // TrA for St1 - Body: T - Title: B

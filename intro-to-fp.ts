/* 3 tribes of programming - Seph Gentle

1. Programming as applied mathematics
Favorite languages: Haskell, Lisp, ML (Ocaml, etc), Closure, ADA
Hangouts: FP meetups, Lambda the ultimate, Strange Loop, Research.
Examples: Rich Hickey, Brett Victor

2. Programming as hardware hacking
Fav languages: C, C++, Assembly.
Hangouts: Hackerspaces, Game dev shops, database companies, CCC, Defcon.
Example: Poul-Henning Kamp, Michael Steil, The 8-Bit guy

3. Programming as a tool to make things
Fav languages: Whatever gets the job done. JS, Ruby, Python, Swift, C#.
Hangouts: Twitter, SydJS, StackOverflow, A Company Near you!

--

The future of computing - Leslie Lamport

--

Functional Programming, let give some body to the term!

Unfavorable situations arise when working with mutable state, unrestricted side effects, and unprincipled design.

DRY (don't repeat yourself), YAGNI (ya ain't gonna need it), loose coupling high cohesion, the principle of least surprise, single responsibility, and so on.

*/

class Flock {
  seagulls = null;

  constructor(n) {
    this.seagulls = n;
  }

  conjoin(other) {
    this.seagulls += other.seagulls;
    return this;
  }

  breed(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
  }
}

const flockA = new Flock(4);
const flockB = new Flock(2);
const flockC = new Flock(0);
const result = flockA
  .conjoin(flockC)
  .breed(flockB)
  .conjoin(flockA.breed(flockB))
  .seagulls;
// 32

const conjoin = (flockX, flockY) => flockX + flockY;
const breed = (flockX, flockY) => flockX * flockY;

const flockPrimeA = 4;
const flockPrimeB = 2;
const flockPrimeC = 0;
const resultPrime = conjoin(breed(flockPrimeB, conjoin(flockPrimeA, flockPrimeC)), breed(flockPrimeA, flockPrimeB));
// 16
//
// (4 + 0) * 2
// 8 * 2

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const resultPrimePrime = multiply(flockB, add(flockA, flockA));

/* Higher-order functions */
const powerOfTwo = (x) => x * x;
const nums = [1,2,4];
nums.map(powerOfTwo);

// example
const getServerStuff = ajaxCall;

// why not?
const getServerStuff = ajaxCall;

// example
const BlogController = {
  index(posts) { return Views.index(posts); },
  show(post) { return Views.show(post); },
  create(attrs) { return Db.create(attrs); },
  update(post, attrs) { return Db.update(post, attrs); },
  destroy(post) { return Db.destroy(post); },
};

// why not?
const BlogControllerPrime = {
  index: Views.index,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy,
};

// specific to our current blog
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined),

// more relevant for future projects
const compact = xs => xs.filter(x => x !== null && x !== undefined);

/*

What is a function?

Number -> String
const numToString = num => {
  if (num === 0) {
    return "alex";
  }

  if (num === 1) {
    return "sjoerd"
  }

  throw new Error("Don't know for this number")
}
const numTwo = numToString(2);

const numToString = ["alex", "sjoerd"];
const numTwo = numToString[1];

What about a pure function?

What is an effect?

Side effects may include, but are not limited to
  * changing the file system
  * inserting a record into a database
  * making an http call
  * mutations
  * printing to the screen / logging
  * obtaining user input
  * querying the DOM
  * accessing system state
*/

// We can write pure functions
// We can use higher-order functions // map, reduce
// eta-reduce argument => fn(argument) is the same as passing fn directly.

// impure
const signUp = (attrs) => {
  const user = saveUser(attrs);
  welcomeUser(user);
};

// pure, testable!
const signUp = (Db, Email, attrs) => () => {
  const user = saveUser(Db, attrs);
  welcomeUser(Email, user);
};

// Types, maybe as null
//

// undefined is not a function
// cannot get ... of null

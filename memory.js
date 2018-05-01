console.log(process.memoryUsage());
const s = [...Array(100)].map((_, i) => String(i % 10).repeat(1024 * 1024 * 64));
// const t = s.map(str => `${str}padding`);
//
const t = s.slice(0, 32).map(str => str.charAt(0));
console.log(t);
console.log(process.memoryUsage());
// s.forEach(x => console.log(x.slice(0, 1)));

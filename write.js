const fs = require("fs");

const person = {
  name: "alex",
  age: 25,
};

Object.keys(person).forEach(key => {
  fs.writeFileSync("./wfs", key, { flags: "a+" });
});

Object.keys(person).forEach(key => {
  fs.appendFileSync("./afs", key);
});

const stream = fs.createWriteStream("./cws", { flags: "a" });
Object.keys(person).forEach(key => {
  stream.write(key);
});
stream.end();

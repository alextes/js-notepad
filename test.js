// test.js
const { GraphQLScalarType } = require('graphql');
const { citizen, MyGraphQLScalarType } = require("./citizen")();

console.log(
  "test.js, citizen is instance of Person?",
  citizen instanceof GraphQLScalarType,
);
console.log(
  "test.js, citizen is instance of MyPerson?",
  citizen instanceof MyGraphQLScalarType,
);

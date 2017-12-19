// citizen.js
const { GraphQLScalarType } = require('graphql');

class Citizen extends GraphQLScalarType {
  constructor() {
    super({
      name: 'Citizen',
      serialize: () => {},
      parseLiteral: () => {},
      parseValue: () => {},
    });
  }
}
const citizen = new Citizen();

console.log('citizen.js, citizen is instance of Person?', citizen instanceof GraphQLScalarType);

module.exports = function () {
  return { citizen, MyGraphQLScalarType: GraphQLScalarType };
};

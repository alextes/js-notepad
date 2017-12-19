const _ = require('lodash');

const data = {
  phoneno: [
    {
      field1: '123456789',
      field2: 'Mohamed',
      field3: 'Sameer',
    },
    {
      field1: '987654321',
      field2: 'Ganesh',
      field3: 'Pandiyan',
    },
  ],
  sender: 'ifelse',
  message: 'test',
};

const selectedColumn = 'field1';
const dataWithoutPhoneNo = _.omit(data, 'phoneno');
const filteredObjects = data.phoneno.map((person) => {
  const extendedObject = _.clone(dataWithoutPhoneNo);
  extendedObject.phoneno = person[selectedColumn];
  return extendedObject;
});
console.log(filteredObjects)

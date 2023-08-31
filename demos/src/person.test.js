const Person = require('./person');


describe('Group 1 test', ()=>{
  let person;
  beforeAll(()=>{
    person = new Person("Laura", 45, 1.67)
  });

  test('weight',()=>{

    const imc = person.calcIMC();
    expect(imc).toBe('down');
  })
})

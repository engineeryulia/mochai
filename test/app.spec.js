const convert = require('../src/app');
const expect = require('chai').expect;

describe('Test suit convert function', () => {

  it('convert(100,08) should return 25,02', () => {
    expect(convert(100,08)).to.be.equal(25,02);
  })
 });
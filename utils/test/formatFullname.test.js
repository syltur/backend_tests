const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return proper characters size if proper arg', () => {
    expect(formatFullname('Amanda DOE')).to.equal('Amanda Doe');
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('AMAnDa DoE')).to.equal('Amanda Doe');
    expect(formatFullname('aMaNdA dOe')).to.equal('Amanda Doe');
  });

  it('should return an error if "fullname" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(11)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () { })).to.equal('Error');
  });

  it('should return an error if "fullname" is empty', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return an error if "fullname" contains more or less than 2 words', () => {
    expect(formatFullname('Jo')).to.equal('Error');
    expect(formatFullname('Jo Nesbo')).to.equal('Jo Nesbo');
    expect(formatFullname('Jo Nesbo Writer')).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname('lorem impsuem lotem ipsum lorem ipsum')).to.equal('Error');
  });
});
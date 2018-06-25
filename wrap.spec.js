const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('is a function', () => {
    expect(wrap).to.be.a('function')
  })
  it('returns a string', () => {
    let result = wrap('hey', 10)
    expect(result).to.equal('hey')
  })
  it('returns a single line if string length is less than column number', () => {
    let result = wrap('testing this function', 22)
    expect(result).to.equal('testing this function')
  })
  it('return empty string', () => {
    let result = wrap('', 22)
    expect(result).to.equal('')
  })
  it('return empty string if column number is negative', () => {
    let result = wrap('Hey there', -22)
    expect(result).to.equal('Hey there')
  })
  it('it splits strings with two character words', () => {
    let result = wrap('No we do', 2)
    expect(result).to.equal('No\n we \n do')
  })
})

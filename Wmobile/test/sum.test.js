const { sum, yewu } = require('../src/radar/sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('status 1 to ceshi', () => {
  expect(yewu(1)).toBe(2)
})

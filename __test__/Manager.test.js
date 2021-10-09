const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('initiate manager instance', () => {
    const e = new Manager('name', 'email', 'id', 'officeNumber')
    expect(e).toEqual(expect.any(Object))
})
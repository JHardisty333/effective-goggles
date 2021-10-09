const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('initiate employee instance', () => {
    const e = new Employee('name', 'email', 'id')
    expect(e).toEqual(expect.any(Object))
})
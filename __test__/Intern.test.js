const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('initiate intern instance', () => {
    const e = new Intern('name', 'email', 'id', 'school')
    expect(e).toEqual(expect.any(Object))
})
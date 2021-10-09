const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('initiate engineer instance', () => {
    const e = new Engineer('name', 'email', 'id', 'github')
    expect(e).toEqual(expect.any(Object))
})
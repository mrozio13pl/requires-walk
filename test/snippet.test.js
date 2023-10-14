const { test } = require('uvu');
const assert = require('uvu/assert');
const requiresWalk = require('../dist');

test('simple test', () => {
    const res = requiresWalk(`const a = require('./module.js');`);

    assert.equal(res, ['./module.js'])
})

test.run();
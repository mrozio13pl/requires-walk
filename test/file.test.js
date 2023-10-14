const { test } = require('uvu');
const assert = require('uvu/assert');
const requiresWalk = require('../dist');

const fs = require('node:fs');
const path = require('node:path');
const src = fs.readFileSync(path.join(__dirname, '/src.js'), 'utf8');

test('get `require()` calls', () => {
    const res = requiresWalk(src);

    assert.equal(res, [
        'fs',
        'http',
        'debug',
        'log-production',
        'log-development',
        'utility-library'
    ])
});

test.run();
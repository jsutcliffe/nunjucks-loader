const requireTpl = require('require.njk');

describe('require filter', function () {
    it ('should include hello.txt using the module loader', function () {
        const expected = require('../fixtures/static/hello.txt');
        const result = requireTpl.render();
        result.should.equal(expected);
    });
});

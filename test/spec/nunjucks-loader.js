const nunjucks = require("nunjucks/browser/nunjucks-slim");

const templateOne = require('hero/default.njk');
const templateTwo = require('villain/default.njk');

describe('nunjucks-loader', function () {
    describe('when requiring templates with the same base name', function() {
        it('should have unique entries in nunjucksPrecompiled', function() {
            nunjucks.nunjucksPrecompiled.should.include.keys([
                'fixtures/templates/hero/default.njk',
                'fixtures/templates/villain/default.njk'
            ]);
        });
    });
});

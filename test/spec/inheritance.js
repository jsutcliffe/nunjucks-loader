const tpl = require('child.njk');

describe('template inheritance', function () {

    it('should inherit from parent template', function () {
        tpl.render.should.be.a.Function;
        tpl.render().should.have.length.above(0);
    });

    it('should render a default argument', function () {
        const result = tpl.render();
        result.should.be.a.String
        result.should.contain('hello world');
        result.should.contain('<div class="content">');
    });

    it('should render using the data context', function () {
        const context = { name: 'everyone' };
        const result = tpl.render(context);
        result.should.be.a.String
        result.should.contain('hello ' + context.name);
    });

});

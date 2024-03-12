const tplByRelativePath = import('../fixtures/templates/child.njk');
const tplByResolvedPath = import('child.njk');

describe('paths', function () {
    it('should resolve paths using webpack resolve', function () {
        const result1 = tplByRelativePath.render();
        const result2 = tplByResolvedPath.render();
        tplByRelativePath.render.should.be.a.Function;
        tplByResolvedPath.render.should.be.a.Function;
        result1.should.equal(result2);
        result1.should.have.length.above(0);
    });
});

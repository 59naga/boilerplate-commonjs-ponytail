// dependencies
import assert from 'assert';

// target
import yourModuleName from '../src';

// specs
describe('yourModuleName', () => {
  it('spec1', () => {
    // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non incidunt magni libero rem. Ut animi deserunt.
    assert.deepStrictEqual(yourModuleName(), { foo: null });
  });
});

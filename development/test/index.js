// dependencies
import assert from 'assert';

// target
import method from '../src';

// specs
describe('method', () => {
  it('spec1', () => {
    // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non incidunt magni libero rem. Ut animi deserunt.
    assert.deepStrictEqual(method(), { foo: undefined });
  });
});

import {Test} from '../src/index';

describe('test', function () {

  it('returns 7', function () {
    let t = new Test();
    expect(t.go()).toBe(7);
  });

});

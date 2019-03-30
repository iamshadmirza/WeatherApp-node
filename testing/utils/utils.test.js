const utils = require('./utils');
const expect = require('expect');

it('should add two number', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44);
    // if (res !== 44) {
    //     throw new Error(`Expected 44 but got ${res}`);
    // }
});

it('should add two number', () => {
    var res = utils.add(11, 11);
    expect(res).toBe(22);
});

it('should include number in an array', () => {
    expect([2, 4, 6]).toInclude(4);
})
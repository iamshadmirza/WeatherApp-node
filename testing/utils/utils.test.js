const utils = require('./utils');

it('should add two number', () => {
    var res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error(`Expected 44 but got ${res}`);
    }
});

it('should add two number', () => {
    var res = utils.add(11, 11);

    if (res !== 23) { // fail test
        throw new Error(`Expected 23 but got ${res}`);
    }
});
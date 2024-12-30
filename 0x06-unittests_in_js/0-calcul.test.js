const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4 for calculateNumber(1, 3)', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return 5 for calculateNumber(1, 3.7)', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    // Add more test cases as needed
});


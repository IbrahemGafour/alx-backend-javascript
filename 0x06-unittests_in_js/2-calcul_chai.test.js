(async () => {
  const { expect } = await import('chai');
  const { default: calculateNumber } = await import('./2-calcul_chai.js');

  describe('calculateNumber', function () {
    describe('SUM', function () {
      it('should return 6 for calculateNumber("SUM", 1.4, 4.5)', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
    });

    describe('SUBTRACT', function () {
      it('should return -4 for calculateNumber("SUBTRACT", 1.4, 4.5)', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
    });

    describe('DIVIDE', function () {
      it('should return 0.2 for calculateNumber("DIVIDE", 1.4, 4.5)', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });

      it('should return "Error" for calculateNumber("DIVIDE", 1.4, 0)', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });
    });
  });
})();
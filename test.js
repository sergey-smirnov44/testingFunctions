
const expect = require('chai').expect;
const filterMy = require('./index.js');
const isPrime = require('./index');
const isLess10 = require('./index')
const factorial = require('./index');
// const isNaN = require('./index')
const assert = require('assert')

describe('filterMy', function () {
    let qwe = 1
    const arr = [0, null, 42, undefined, "", true, false, NaN, "", "foo bar"];
    let array = [1,3,5,7,4,6,8,14];
    function isPrime(num) {
        if (num <= 1) return false;
        else if (num === 2) return true;
        else {
            for (let i = 2; i < num; i++)
                if (num % i === 0) {
                    return false
                }
            return true
        }
    } // функция находит простые числа
    function isLess10(elem) {
        return elem < 10
    }

    it('function find prime numbers of array ', function (){
        expect(array.filterMy(isPrime)).to.deep.equal([3,5,7]);
    });

    it('function find numbers less 10', function () {
        expect([1,3,5,7,4,6,8,14].filterMy(isLess10)).to.deep.equal([1,3,5,7,4,6,8]);
    });

    it('function filtered falsy values', function () {
        expect(arr.filterMy(Boolean)).to.deep.equal([42, true, "foo bar"]);
    });
    // it('Callback is not a function', function () {
    //     // expect(arr.filterMy(qwe)).to.equal(new Error('Callback is not a function'));
    //     assert.deepEqual(arr.filterMy(qwe),  Error('Callback is not a function'))
    // });

})

describe("factorial", function() {

    it('should return a number', () => {
        // assert.equal(typeof factorial(5), 'number');
        expect(typeof factorial(5)).to.deep.equal('number');
    });


    it('factorial(5) should return 120', () => {
        assert.equal(factorial(5), 120);
    });

    it('factorial(10) should return 3628800', () => {
        assert.equal(factorial(10), 3628800);
    });

    it('factorial(20) should return 2432902008176640000', () => {
        assert.equal(factorial(20), 2432902008176640000);
    });

    it('factorial(0) should return 1', () => {
        assert.equal(factorial(0), 1);
    });

});

describe ('isPrime', function () {
    it('valid on typeof number', () => {
        expect(typeof isPrime(12)).to.equal('number');
    })
})



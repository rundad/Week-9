var assert = require('assert'); //link in assertion library
var linearPoint = require('../server/linearPoint.js');

describe('Tests for linearPoint function', ()=>{
    describe('Test Case 1 #linearPoint', ()=>{
        it('should return 6 with given M value of 2, X value of 1 and C value of 4', ()=>{
            assert.equal(linearPoint(2, 1, 4), 6);
        });
    });
    describe('Test Case 2 #linearPoint', ()=>{
        it('should return 4 with given M value of 2, X value of 0 and C value of 4', ()=>{
            assert.equal(linearPoint(2, 0, 4), 4);
        });
    });
    describe('Test Case 3 #linearPoint', ()=>{
        it('should return 2 with given M value of 2, X value of -1 and C value of 4', ()=>{
            assert.equal(linearPoint(2, -1, 4), 2);
        });
    });
})
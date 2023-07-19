import {assert} from 'chai';
import fromWhere from "../functions/fromWhere.js";

describe('Testing the "fromWhere" function' , function(){
    it('It does return Bellville.' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 

    });

    it('It does return Paarl.' , function(){
        assert.equal(fromWhere('CJ 453502'), 'Paarl'); 

    });

    it('It does return Cape Town.' , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town'); 

    });

    it('It does return Some other place.' , function(){
        assert.equal(fromWhere('GP 568593'), 'Some other place!'); 

    });

    it('It does return a string.', () => {
        assert.typeOf(fromWhere('CA 456 564'), "string", 'The expected value is a string.')
    })
}); 
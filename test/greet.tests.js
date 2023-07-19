import {assert} from 'chai';
import greet from "../functions/greet.js";

describe('Testing the "greet" function' , function(){
    it('It does return Hello yousha.' , function(){
        assert.equal( greet("yousha"),"Hello, yousha","Actual string value equals expected string value.");

    });

    it('It does return Hello Tshepo.' , function(){
        assert.equal( greet("Tshepo"),"Hello, Tshepo","Actual string value equals expected string value.");

    });

    it('It does return Hello pumi.' , function(){
        assert.equal( greet("pumi"), "Hello, pumi","Actual string value equals expected string value.");

    });
}); 
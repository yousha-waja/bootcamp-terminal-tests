import {assert} from 'chai';
import allFromTown from "../functions/countAllFromTown.js";

describe('Testing the "countAllfromTown" function' , function(){
    it('It does return registration numbers from stellies.' , function(){
        assert.deepEqual( allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), ['CL 124', 'CL 345', 'CL 341'],"The function does return an array equals to expected value." );

    });

    it('It does return registration numbers from Paarl.' , function(){
        assert.deepEqual( allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'), ['CJ 456'], "The function does return an array equals to expected value.");

    });
   
    it('It does return registration numbers from Cape Town.' , function(){
        let Cape = allFromTown('CA 124,CY 567,CL 345, CA 456,CL 341','CA');
        assert.equal(Cape[1],'CA 456', "The actual string value equals the expected string value.");

    });

    it('It does return registration numbers from Kuilsriver.' , function(){
        assert.deepEqual( allFromTown('CA 124,CF 567,CL 345, CJ 456,CF 341','CF'),['CF 567', 'CF 341'], "The function does return an array equals to expected value.");

    });
}); 
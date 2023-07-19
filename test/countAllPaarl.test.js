import {assert} from 'chai';
import countAllPaarl from "../functions/countAllPaarl.js";

describe('Testing the "countAllPaarl" function' , function(){
   it("It is an array.", ()=>{
    assert.isArray(countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'), "Asserts that the value is an array.")
   })
    
    it('It does return the number of reg numbers from Paarl.' , function(){
        assert.lengthOf( countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'), 2, 'There are 2 Paarl reg numbers.');

    });

    it('It does return a match for the first Paarl reg number.' , function(){
        assert.strictEqual('CJ 678 543', countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')[0], 'The first reg number in the array equals the expected value.');

    });

    it('It does return a match for the second Paarl reg number.' , function(){
        assert.strictEqual('CJ 67890', countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')[1], 'The second reg number in the array equals the expected value.');

    });

}); 
import {assert} from 'chai';
import totalPhoneBill from '../functions/totalPhoneBill.js'

describe('Testing the "totalPhoneBill" function' , function(){
    it('It does return a total of R4,70.' , function(){
        assert.equal('R4.70', totalPhoneBill('sms, call, sms, sms'));

    });

    it('It does return a total of R1,95.' , function(){
        assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));

    });

    it('It does return a total of R12,95.' , function(){
        assert.equal('R12.95', totalPhoneBill('sms, call, sms, sms, call, call,call'));

    });
}); 
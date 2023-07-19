import {assert} from 'chai';
import isFromBellville from '../functions/isFromBellville.js';

describe('Testing the "isFromBellville" function', ()=>{
    it('It does return true for reg plates from Bellville.', ()=>{
        assert.isTrue(isFromBellville("CY 234 564"),'The expected value is true.')
    });

    it('It does return false for reg plates not from Bellville.', ()=>{
        assert.isFalse(isFromBellville("CA 454 559"),'The expected value is false.')
    })

});
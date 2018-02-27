"use strict";
let arc4=require('./arc4');
let rc4a=require('./rc4a');
let rc4plus=require('./rc4+');
let vmpc=require('./vmpc');
var store={
    arc4,rc4a,vmpc
};
store['rc4+']=rc4plus;

function normal(algorithm, password) {
    console.log(store);
    var Class;
    try {
        Class = store[algorithm];
    } catch (e) {
        throw new TypeError("algorithm required");
    }
    if (!password) throw new TypeError("password required");
    return new Class(password);
}

module.exports = normal;

/*! xor_21 v0.0.0 - MIT license */
'use strict';

var xor_21 = function (input)
{
    if (typeof input === "number") { return input ^ 21; }
    if (typeof input === typeof [])
    {
        if (input.length === 0) { return []; }
        let answer = [];
        for (let value of input)
        {
            answer.push(value ^ 21);
        }
        return answer;
    }
}

if (typeof module !== "undefined")
{
    module.exports = xor_21;
}
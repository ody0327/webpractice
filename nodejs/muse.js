/*
var M = {
    v: 'v',
    f:function(){
        console.log(this.v);
    }
}
*/

var part = require('./mpart.js'); // mpart.js를 불러옴
console.log(part); // { v: 'v', f: [Function] }가 출력됨

part.f(); // v가 출력됨
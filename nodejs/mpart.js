
var M = {
    v: 'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M; // module.exports로 M을 내보냄 밖에서도 사용 가능

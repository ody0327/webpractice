
var name = 'egoing'
var letter = 'Lorem'
 + name + 'ipsum' + name + ' dolor\n\
 \n\
sit' + name + ' amet'; // \n\이 줄바꿈 기호
console.log(letter);

// 중복을 제거하면 좋은 프로그램이 된다

var letter = `Lorem ${name} 
ipsum ${name} dolor

sit ${1 + 1} amet`; // `` = 템플릿 리터럴이라는 간편한 기능

console.log(letter);

var number = [1, 400, 12, 34, 5, 10000];
var i = 0;
var total = 0;
while(i < number.length) { // 배열의 길이만큼 반복
    total = total + number[i];
    i = i + 1;
}

console.log(`total : ${total}`); // template literal을 사용해 변수 출력
// 배열
// CRUD = Create, Read, Update, Delete

var arr = ['A', 'B', 'C', 'D', 'E'];
console.log(arr[1]); // B
console.log(arr[3]); // D

arr[2] = 3;
console.log(arr); // ['A', 'B', 3, 'D', 'E']
console.log(arr.length); // 5
arr.push('F'); // 배열의 끝에 요소 추가
console.log(arr); // ['A', 'B', 3, 'D', 'E', 'F']
arr.pop(); // 배열의 끝에서 요소 제거
console.log(arr); // ['A', 'B', 3, 'D', 'E']
arr.unshift('Z'); // 배열의 처음에 요소 추가
console.log(arr); // ['Z', 'A', 'B', 3, 'D', 'E']
arr.shift(); // 배열의 처음에서 요소 제거
console.log(arr); // ['A', 'B', 3, 'D', 'E']
arr.splice(2, 1); // 배열의 2번 인덱스에서 1개 요소 제거
console.log(arr); // ['A', 'B', 'D', 'E']
arr.splice(2, 0, 'C'); // 배열의 2번 인덱스에 0개 요소 제거하고 'C' 추가
console.log(arr); // ['A', 'B', 'C', 'D', 'E']
arr.splice(2, 1, 'X'); // 배열의 2번 인덱스에서 1개 요소 제거하고 'X' 추가
console.log(arr); // ['A', 'B', 'X', 'D', 'E']
arr.splice(2, 1, 'X', 'Y'); // 배열의 2번 인덱스에서 1개 요소 제거하고 'X', 'Y' 추가
console.log(arr); // ['A', 'B', 'X', 'Y', 'D', 'E']
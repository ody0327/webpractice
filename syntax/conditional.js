var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1') {
    // args[2] == '1' : args[2]가 1이면 참
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');
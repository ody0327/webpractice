var testFolder = './data'; // 읽어올 디렉토리 경로를 지정합니다.
var fs = require('fs'); // fs 모듈을 사용하여 파일 시스템에 접근, fs 모듈은 Node.js의 기본 모듈로, 파일 및 디렉토리 작업을 수행하는 데 사용됩니다.

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist); // testFolder 디렉토리의 파일 목록을 출력합니다.
});



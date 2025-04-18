var http = require('http');
var fs = require('fs');
var path = require('path');  // path 모듈을 추가하여 경로 문제를 해결

var app = http.createServer(function(request, response) {
    var url = request.url;

    if (url == '/') {
        url = '/index.html';  // 기본 페이지를 index.html로 설정
    }

    if (url == '/favicon.ico') {
        return response.writeHead(404);  // 파비콘 요청에 대해 404 처리
    }

    // 파일 경로를 절대 경로로 해결
    var filePath = path.join(__dirname, url);  // __dirname과 url을 결합하여 파일 경로를 생성
    var tamplate = `<!doctype html>
<html>
<head>
  <title>WEB1 - HTML</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
  <h2>HTML</h2>
  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
  <img src="coding.jpg" width="100%">
  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
  </p>
</body>
</html>
    `;
    // 파일이 존재하는지 확인 후 읽기
    fs.exists(filePath, function(exists) {
        if (exists) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(fs.readFileSync(filePath));  // 파일 읽어서 반환
        } else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');  // 파일이 없으면 404 오류 반환
        }
    });
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});

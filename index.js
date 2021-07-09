var express = require('express'); 
var app = express();

app.set("port", process.env.PORT || 4000); // 서버 포트 설정.  
app.use(express.static(__dirname + '/'))
//정적 파일 제공 미들웨어asa
//npm으로 설치할 필요 x. 이미 내장
//서버에서 a.jpg 찾음 => ./pubic폴더에서 찾음

//render(html)할려고 한 코드들..
app.engine('html', require('ejs').renderFile);
app.set("views", "./views");
app.set("view engine", "html");



app.get('/',function(req,res){
    console.log('[main.js] Main page loading...');
    res.render('index')

});
app.listen(app.get('port'),function(){  //서버 연결 
    console.log('[Listening] localhost @',app.get('port'));
});

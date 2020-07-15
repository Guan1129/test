var express=require('express')
var app=express()
var data=require('./data')
/* app.all("*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}) */
app.get('/',(req,res)=>{
    res.send('首页')
})
app.get('/nows',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    var id=req.query.id
    res.send({
        id:id,
        title:'新闻标题'+id,
        desc:'sdnfoasdfsfsdnfasdf',
        contenturl:'content?pingid='+id
    })
})

app.get('/content',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    var id=req.query.pingid
    res.send(data.filter(item=>{
        return  item.id==id
    }))
})

app.listen(3000,()=>{
    console.log(3000);
    
})
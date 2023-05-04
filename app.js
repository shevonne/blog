//引入
const querystring = require("querystring");
const handlerBlogRouter = require("./src/router/blog");
const handlerUserRouter = require("./src/router/user");

const serverHandle = (req,res) =>{
    //设置请求头
    res.setHeader("Content-type","application/json");
    //获取url
    const url = req.url;
    req.path = url.split("?")[0];
   
    //解析query
    req.query = querystring.parse(url.split("?")[1]);

    //处理博客路由
    const blogData = handlerBlogRouter(req,res);
    console.log('blogData: ', blogData);
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    //处理登录路由
    const loginData = handlerUserRouter(req,res);
    if(loginData){
        res.end(
            JSON.stringify(loginData)
        )
        return;
    }

    //处理未查找到路由
    res.writeHead(404,{"Content-type":"text/plain"});
    res.write("404 NOT FOUND");
    res.end();

}

module.exports = serverHandle
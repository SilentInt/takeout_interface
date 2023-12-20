//引入模块
const http = require("http");
const console = require("console");
const url = require("url");
//const url = require('url')这是用来处理带参数的
//const queryString = require('querystring')这也是用来处理带参数的
//导入数据
const data = require("./data.js");

//以下是处理GET方式提交的请求
//req中的req.url就是域名之后所有的一大串
//使用url模块对req.url进行第一次转换转成Object的形式
//其中对我们目前来说，这个转换后的对象里面属性，最主要的是
//1、path的值为req.url
//2、pathname能获取到？前的路由
//3、search能获取？以及？之后
//4、query能获取？之后的
//其中对目前来说最有用的是query模块所以使用queryString和之前对req.url一样
//把query转化成object

//以下是处理POST方式提交的请求
//POST请求时候会触发DATA事件
//Node端收完请求的触发END事件

//启动命令
//node server.js
const server = http.createServer((req, res) => {
  //解决跨域问题
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS",
  );

  // 去掉参数的url
  let purl = req.url.split("?")[0];

  // 根据purl返回对应的数据
  let resBody = data[purl];
  if (!resBody) {
    // 如果没有对应的数据，就红色报错
    console.log("\x1B[31m", "ERROR\t", req.method, req.url, "\x1B[0m");
    // 返回404
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ code: 0, msg: "接口不存在" }));
  } else {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    console.log("\x1B[32m", "SUCCESS\t", req.method, req.url, "\x1B[0m");
    res.end(JSON.stringify(resBody));
  }

  // 如果是POST请求，就解析post参数
  if (req.method === "POST") {
    // 打印请求体
    let postDate = "";
    req.on("data", function (datachunk) {
      postDate += datachunk.toString();
    });
    req.on("end", function () {
      console.log(postDate.trim());
    });
  } else {
    // 解析参数
    let arg = url.parse(req.url, true).query;
    console.log(JSON.stringify(arg));
  }
});

//监听端口
server.listen(3000, () => {
  console.log("server is ok!");
});

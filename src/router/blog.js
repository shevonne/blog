//返回数据引入
const {getList} = require("../controller/blog");
//返回数据格式处理
const {SuccesModel,ErrorModel} = require("../model/resModel");
//路由
const blogRouterHandler = (req, res) => {
    //获取列表
    if (req.method === "GET" && req.path == "/api/blog/list") {
        const author = req.query.author || "";
        const keyword = req.query.keyword || "";
        const listData = getList(author,keyword);
        return new SuccesModel(listData);
    }
    //获取详情
    if (req.method === "GET" && req.path == "/api/blog/detail") {
        return {
            msg: "这是详情接口"
        }
    }
    //新建
    if (req.method === "POST" && req.path == "/api/blog/add") {
        return {
            msg: "这是新增接口"
        }
    }
    //更新
    if (req.method === "POST" && req.path == "/api/blog/update") {
        return {
            msg: "这是更新接口"
        }
    }
    //删除
    if (req.method === "POST" && req.path == "/api/blog/del") {
        return {
            msg: "这是删除接口"
        }
    }
}

module.exports = blogRouterHandler
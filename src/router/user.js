const loginRouterHandler = (req, res) => {
    //获取登录
    if (req.method === "POST" && req.path == "/api/blog/login") {
        return {
            msg: "这是登录接口"
        }
    }
}

module.exports = loginRouterHandler
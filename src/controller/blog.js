//与数据库查询返回具体的数据相关逻辑
//处理列表数据
const getList = (author, keyword) => {
    return [
        {
            id:1,
            name:"shevon",
            content:"内容A",
            title:"标题A"
        },
        {
            id:2,
            name:"shevon",
            content:"内容B",
            title:"标题B"
        }
    ]

}


module.exports = {
    getList
}
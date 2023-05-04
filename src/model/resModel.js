//处理返回数据格式
class BaseModel{
    constructor(data,message){
        if(typeof data === "string"){
            this.message = data;
            data = null;
            message = null;
        }
        if(data){
            this.data = data;
        }
        if(message){
            this.message = message;
        }
    }
}

//成功
class SuccesModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errno = 0;
    }
}

//失败
class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errno = -1;
    }
}

module.exports = {
    SuccesModel,
    ErrorModel
}
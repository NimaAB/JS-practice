let fs = require('fs');

export const load = (path)=>{
    fs.readFile(path,'utf8',function(_err,data){
        return data.toString();
    })
}
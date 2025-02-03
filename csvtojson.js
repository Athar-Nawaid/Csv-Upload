import * as csv from 'csvtojson';
import path from 'path'


const csvToJson = async(name)=>{
    let newPath = path.join(path.resolve(),'Files',`${name}`)
    return await csv.default().fromFile(newPath);
}

export default csvToJson;
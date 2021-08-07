import axios from 'axios'
export default function ajax(url,data={},type){
   return new Promise((resolve,reject)=>{
       let promise;
       if(type="GET"){
        let datStr=''
        Object.keys(data).forEach(key=>{
            dataStr+=key+"="+data[key]+"&";
        })
        if(dataStr!==""){
            dataStr=datStr.substring(0,dataStr.lastIndexOf("&"))
            url=url+"?"+dataStr
        }
        pormise=axios.get(url)
       }else{
        pormise=axios.post(url,data)
       }
       promise.then(res=>{
        resolve(res.data)
       }).catch(err=>{
        reject(err)
       })
   })
}
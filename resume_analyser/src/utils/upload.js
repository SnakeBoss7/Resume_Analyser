import axios from "axios";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

 export const HandleUpload = async (File)=>
    {
        
      let formdata = new FormData();
      formdata.append("resume", File);
      
      try{
        let res = await axios.post('http://192.168.189.112:5000/api/resume/analyze',formdata)
        
        await delay(7000);

        return {data:res.data.data,error:null};
      }
      catch(err)
      {
        console.log(err)
        return {data:null,error:err};
      }

    }
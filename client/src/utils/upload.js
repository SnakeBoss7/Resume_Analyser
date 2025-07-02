import axios from "axios";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 export const HandleUpload = async (File)=>
    {
        
      let formdata = new FormData();
      formdata.append("resume", File);
      
      try{
        let res = await axios.post('http://localhost:5000/api/resume/analyze',formdata)
        
        // await delay(1000);

        return {data:res.data.data,error:null,text:res.data.text};
      }
      catch(err)
      {
        console.log(err)
        return {data:null,error:err};
      }

    }
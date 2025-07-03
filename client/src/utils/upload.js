import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 export const HandleUpload = async (File)=>
    {
        
      let formdata = new FormData();
      formdata.append("resume", File);
      
      try{
        let res = await axios.post(`${apiUrl}api/resume/analyze`,formdata)
        
        // await delay(1000);

        return {data:res.data.data,error:null,text:res.data.text};
      }
      catch(err)
      {
        console.log(err)
        return {data:null,error:err};
      }

    }
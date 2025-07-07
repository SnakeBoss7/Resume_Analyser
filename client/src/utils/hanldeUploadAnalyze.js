import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL ?? '';
const locUrl = process.env.REACT_APP_LOC_URL ?? '';
const env = process.env.REACT_APP_LOC;

const Url = env === 'local' ? locUrl : apiUrl;

 export const HandleUploadAnlayze = async (File)=>
    {
        
      let formdata = new FormData();
      formdata.append("resume", File);
      
      try{
        console.log('calling : '+ Url);
        // console.log('calling : '+ locUrl);
        let res = await axios.post(`${Url}/api/resume/analyze`,formdata)
        
        if(res.data.message)
          {
            console.log(res.data.message);
          }
        return {data:res.data.data,error:null,text:res.data.text};
      }
      catch(err)
      {
        console.log(err)
        return {data:null,error:err};
      }

    }
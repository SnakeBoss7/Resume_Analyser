// utils/handleUploadEnhacne.js
import axios from "axios";
import { upload } from "./fileupload";

const apiUrl = process.env.REACT_APP_API_URL ?? '';
const locUrl = process.env.REACT_APP_LOC_URL ?? '';
const env = process.env.REACT_APP_LOC;
const Url = env === 'local' ? locUrl : apiUrl;
async function HandleUploadEnhacne(File) {
  const formData = new FormData();
  formData.append('resume', File);

  let fileName = await upload(formData,Url);
  console.log(fileName);
  try
  {
    const res = await axios.post(`${Url}/api/resume/enhancer`,{filename:fileName} );
    return { data: res.data.data, mess: "working", text: null };
  }catch (err) 
  {
    console.log(err);
    return { data: null, mess: "Error occurred while enhancing the resume", text: null };
  }

}

// ✅ Then export it correctly
export default HandleUploadEnhacne;

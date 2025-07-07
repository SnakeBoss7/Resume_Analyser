import axios from "axios";

export const upload=async (formData,Url)=>
{
      try {
    const res = await axios.post(`${Url}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    return res.data.file.filename;
    
  } catch (err) {
    console.error(err);
    return { mess: "Upload failed" };
  }
}
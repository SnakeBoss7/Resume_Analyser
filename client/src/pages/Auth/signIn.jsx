import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiLoc = process.env.REACT_APP_LOC_URL;

export const SigIn = ()=>
    {
        const navigate = useNavigate();
        const [name,setName] = useState("");
        const [email,setEmail] = useState("");
        const [pass,setPass] = useState("");
        const [mess,setMess] = useState("");
        const handleSubmit = async (e) =>
            {
                e.preventDefault();
                try
                {
                    let res = await axios.post(`${apiLoc}/api/auth/signIn`, {name,email,pass},{withCredentials:true});
                    console.log(res);
                    setMess(res.data.message);
                    navigate('/');
                }
                catch(err)
                {
                    console.log(err);
                    setMess(err.response.data.message);
                }
            }
        return (
          <>
            <Link to="/">Back to home</Link>
            <h2>Sign In</h2>
            <form action="" onSubmit={handleSubmit}>
              <input name="Name" required type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
              <input name="Email" required type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              <input name="pass" required type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
              <button type="submit">SUBMIT</button>
              <p>{mess}</p>
            </form>
          </>
        );
    }

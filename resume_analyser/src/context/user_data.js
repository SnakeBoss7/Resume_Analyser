import {createContext,useState,useContext} from 'react';

const ResumeContext = createContext();

const ResumeProvider =({children})=>
    {
        const [userData,setUserData]= useState({});
        return (
            <ResumeContext.Provider value={{userData,setUserData}}>
                {children}
        </ResumeContext.Provider>

        );
    }

const useProvider =()=> useContext(ResumeContext);

export {useProvider, ResumeProvider};
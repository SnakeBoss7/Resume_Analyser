import {createContext,useState,useContext} from 'react';

const ResumeContext = createContext();

const ResumeProvider =({children})=>
    {
        const [userData,setUserData]= useState({});
        const [parsedText,setParsedText] =useState('');
        return (
            <ResumeContext.Provider value={{userData,setUserData,parsedText,setParsedText}}>
                {children}
        </ResumeContext.Provider>

        );
    }

const useProvider =()=> useContext(ResumeContext);

export {useProvider, ResumeProvider};
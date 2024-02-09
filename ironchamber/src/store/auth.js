import { createContext, useContext, useEffect, useState } from "react";
import translate from "../Components/Translate.json"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [language, setLanguage] = useState("English")
    const [content, setContent] = useState({})
    useEffect(()=>{
        if(language==="English"){
            setContent(translate.en)
        }
        else if(language==="Marathi"){

            setContent(translate.mr)
        }
        else if(language==="Hindi"){
            setContent(translate.hi)
        }
        else{
            setContent(translate.gu)
        }
    },[language])


    return (
        <AuthContext.Provider value={{ content, setLanguage, language }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
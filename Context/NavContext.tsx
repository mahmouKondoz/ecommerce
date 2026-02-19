   'use client'
import { createContext, useContext, useEffect, useState } from "react";


type NavContextType = {
    islogin : string | null ,
    setIslogin : React.Dispatch<React.SetStateAction<string | null>>
}
 export let NavContext = createContext<NavContextType | null >(null)


export default function NavContextProvider({children}:{children:React.ReactNode}){


    const [islogin, setIslogin] = useState<string | null>(null);
    useEffect(() => {
  setIslogin(localStorage.getItem('userToken'));
}, []);

    

    return <NavContext.Provider value={{islogin , setIslogin}}>
        {children}
    </NavContext.Provider>
}
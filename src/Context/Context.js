'use client'
import { createContext, useContext, useState } from "react";



export const Context = createContext();



const ContextProvider=({children})=>{
  
    const [theme,setTheme] = useState('default');

    return  <Context.Provider value={{theme,setTheme}}> {children} </Context.Provider>
 
}



export default ContextProvider;





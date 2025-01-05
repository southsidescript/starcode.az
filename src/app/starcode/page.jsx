'use client'
import react, { useEffect, useState } from "react";
import Bot from "../Components/Bot/Bot";
import style from '../../styles/global.module.scss'




const Starcode = () => {

      const [name, setName  ] = useState([''])
        
      useEffect(() => {
                const sentence = ['S','T','A','R','C',<span><img className={style.starcode_heading_design} src="./react.png" alt="" /></span>,'D','E'];
                 
                
                sentence.forEach((value, index, array) => {
                  setTimeout(() => {
                    setName(current=>[...current,value])
                  }, index * 139);
                
                  
                })
                

      },[])

  
  return (<div className={style.starcode}>

       <header>
          <h1 className={style.starcode_heading}>
                {name.map((w,s) => <span key={s} >{w}</span>  ) } 
          </h1>

         
       </header>
     
        <main className={style.starcode_main}>
            <div className={style.starcode_title}>
                  Texnologiyalar dünyasını kəşf et — gələcəyini təmin et
            </div>


            <button className={style.starcode_start}>Ilk addimini et</button>
        </main>
       
        
    <Bot/>


      
  </div>)
    
}

export default Starcode;
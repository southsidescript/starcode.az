
import Image from "next/image";
import style from'../Styles/global.module.scss';
import Planet from "@/Components/Planet/Planet";
import Button from "@/Components/Button/Button";
import { Context } from "@/Context/Context";
import { useContext } from "react";


export default function Home() {
    
 
// const theme = useContext()



const bgMove =(e) => {
   const x = e.clientX;
   const y = e.clientY;

   document.body.style.backgroundPosition = `${x}px ${y}px`;
     

};


    
   
  
   return (
     


     <div className={style.home}>

        <header className={style.header}> 
            
            <div className={style.header_logo}>
               
                 <div> StarC<Image src={'/elements/react_letter.svg'} height={30} width={30} alt="logo_letter"  />de </div>  
              </div>
              
              <nav className={style.header_nav}>

               <ul>
                  <li><a href="">Təhsil plani</a></li>
                  <li><a href=""> ətrafli</a></li>
                  <li><a href="">əlaqə</a></li>
                  </ul> 

              </nav>

               <button className={style.header_btn}>request btn</button>
               
          
        </header>
         
        <main className={style.main}>
     
     
           <section className={style.main_home}>
                
                <div className={style.main_home_title}>
                
                Texnologiyalar dünyasını kəşf et <br /> gələcəyini təmin et
                </div>
               
             
                
  


                

               <Planet/>

           </section>

        </main>
       
 
     </div>
    
  );
}





'use client'


import Image from "next/image";
import style from '../../Styles/global.module.scss';
import Button from "../Button/Button";
import { useRef } from "react";

const Planet =()=> {


  const ref =useRef();
  const handleSlideRight = (e) => {


    ref.current.style.animation = 'rightSlide .87s 1 linear forwards';

  }
 



 return(
       <article      className={style.planet}>
 
          

          <Image
             ref={ref}
             src="/elements/planet51.png"
             width={1366}
             height={1366}
             alt="planet"
           />
             <Button onClick={handleSlideRight}  > Подробнее </Button>

       </article> 
   )




}

export default Planet;
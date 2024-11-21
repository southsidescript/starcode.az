'use client'

import style from '../../Styles/global.module.scss';


const Button = (props) => {
  
     return(
   <button className={style.btn_primary} onClick={props.onClick}>
     {props.children}
   </button>
 );




};


export default Button;
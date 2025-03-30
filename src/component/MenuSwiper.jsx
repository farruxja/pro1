import React from 'react'
import { NavLink } from 'react-router-dom'
import right from "../img/right.png"
import bug1 from "../img/big__bur.png"
import bug2 from "../img/small_bur.png"
import '../style/chegirma.css'
function MenuSwiper() {
  return (
    <div className='chegirma'>
     <div className="chegirma__content">
     <h1>Lorem ipsum dolor sit amet for the future</h1>
      <h1>50% <span>off</span></h1>
      <NavLink to="/allskid">Barchasini ko’rish <img src={right} alt="" /></NavLink>
     </div>
     <div className="chegirma__img">
        <img className='bur1' src={bug1} alt="" />
        <img className='bur2' src={bug2} alt="" />
     </div>

    </div>
  )
}

export default MenuSwiper

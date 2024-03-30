"use client"
import React, { useState } from 'react'
import { GrAd } from "react-icons/gr";
import { CiSearch, CiHeart, CiShoppingBasket, CiUser, CiMenuBurger } from "react-icons/ci";
import DescriptionHeader from './descriptionHeading/descriptionHeading';


function Header() {

    const [showMenu, setShowMenu] = useState(true);
    return (
        <div className='headerContainer'>
            <div className='logoSection'>
                <div className='leftLogo'>
                    <menu onClick={() => setShowMenu(!showMenu)} className='menuItems'>
                        {console.log(showMenu, "showMenu boolean log")}
                        {<CiMenuBurger />}
                    </menu>
                    <h2 className='leftLogoIcon'>
                        {<GrAd />}
                    </h2>
                </div>

                <div className='logoName'>
                    <h2>LOGO</h2>
                </div>

                <div className='rightIcons'>
                    <div className='icons'>
                        <h2 className='searchIcon'> {<CiSearch />} </h2>
                        <h2 className='heartIcon'> {<CiHeart />} </h2>
                        <h2 className='shoppingBasket'> {<CiShoppingBasket />} </h2>
                        <h2 className='userIcon'> {<CiUser />} </h2>
                    </div>
                </div>

            </div>

            <div className={showMenu ? 'subMenus' : 'downMenu'}>
                <h4>SHOP</h4>
                <h4>SKILLS</h4>
                <h4>STORIES</h4>
                <h4>ABOUT</h4>
                <h4>CONTACT US</h4>
            </div>

        </div>
            
    )
}

export default Header
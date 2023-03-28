import React from 'react';
import {IoMdNotifications} from 'react-icons/io'
import {BiChevronsDown} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import {MdOutlineLanguage} from 'react-icons/md'
import {BsPaletteFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'
import noUser from '../../assets/noUser.png'
import HeaderSearch from "./HeaderSearch";
import SwitchLang from "./SwitchLang/SwitchLang";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className="header__left">
                        <h1 className='header__title'>SABYR WEB</h1>
                        <HeaderSearch/>

                    </div>
                    <div className="header__right">
                        <span className='header__notif'>
                            <IoMdNotifications/>
                        </span>
                        <SwitchLang/>
                        <span className='header__user'>
                            <img className='header__user-photo' src={noUser} alt="User not found"/>
                            <span className='header__user-icon'><BiChevronsDown/></span>
                        </span>
                    </div>
                </nav>
                </div>
        </header>
    );
};

export default Header;
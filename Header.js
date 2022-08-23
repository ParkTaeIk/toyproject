import { React } from "react";
import HeaderItem from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';
import LoginItem from './MenuItem.module.css';

function Header() {

    return (
    <div className = { HeaderItem.Header }>
        <ul>
            <li>
        <NavLink to = "/"><h1>Woo-ri.Pet</h1></NavLink>
            </li>
        </ul>
        <div className = { LoginItem.Login }>
            <ul>
                <li><NavLink to="login" >로그인</NavLink></li>
                <br/><br/>
                <li><NavLink to="signup" >회원가입</NavLink></li>
                <br/><br/>
                <li><NavLink to="like" >♥ 좋아요</NavLink></li>
            </ul>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    );
}

export default Header;
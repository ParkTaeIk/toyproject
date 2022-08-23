import Header from "../components/Header";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout2() {

    return (
        <div>
            <Header/>
            <Navbar2/>
            <Outlet/>
            <br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Layout2;
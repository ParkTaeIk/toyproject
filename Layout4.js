import Header from "../components/Header";
import Navbar4 from "../components/Navbar4";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout4() {

    return (
        <div>
            <Header/>
            <Navbar4/>
            <Outlet/>
            <br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Layout4;
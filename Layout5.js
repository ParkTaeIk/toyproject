import Header from "../components/Header";
import Navbar5 from "../components/Navbar5";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout5() {

    return (
        <div>
            <Header/>
            <Navbar5/>
            <Outlet/>
            <br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Layout5;
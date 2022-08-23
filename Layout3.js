import Header from "../components/Header";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout3() {

    return (
        <div>
            <Header/>
            <Navbar3/>
            <Outlet/>
            <br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Layout3;
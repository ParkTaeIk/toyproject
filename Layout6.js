import Header from "../components/Header";
import Navbar6 from "../components/Navbar6";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout6() {

    return (
        <div>
            <Header/>
            <Navbar6/>
            <Outlet/>
            <br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Layout6;
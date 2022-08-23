import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout() {

    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
            <br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Layout;
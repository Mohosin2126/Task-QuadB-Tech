import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Layout = () => {
    return (
        <div>
            {/* Navbar component */}
            <Navbar></Navbar>
            {/* Outlet for rendering child routes */}
            <Outlet></Outlet>
            {/* Footer component */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "../Home/Nabar/Navbar";
import Footer from "../Home/Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
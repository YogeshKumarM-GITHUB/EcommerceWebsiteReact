import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="pt-16">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default Layout;
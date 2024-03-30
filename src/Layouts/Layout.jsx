import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const Layout = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
interface Props { children: JSX.Element | JSX.Element[] }
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';

export const Layout2 = () => {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            TTTT
            <main role="main" className="wrapper">
                <div className="content">
                <Outlet />
                </div>
            </main>
        
        </div>
    )
}
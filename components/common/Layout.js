import React from "react";  
import LandingNav from "./LandingNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return(
        <div>
            <LandingNav />
            {children}
            <Footer />
        </div>
    )
};

export default Layout;  
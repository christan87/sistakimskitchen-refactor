import React from "react";  
import LandingNav from "./LandingNav";

const Layout = ({ children }) => {
    return(
        <div className="check-this-div!">
            <LandingNav />
            {children}
        </div>
    )
};

export default Layout;  
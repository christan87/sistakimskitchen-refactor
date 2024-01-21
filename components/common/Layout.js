import React from "react";  
import LandingNav from "./LandingNav";
import Footer from "./Footer";
import {sistaKimsKitchen} from '../constants';


const Layout = ({ children }) => {
    return(
        <div>
            <head>
                <title>{sistaKimsKitchen}</title>
            </head>
            <LandingNav />
            {children}
            <Footer />
        </div>
    )
};

export default Layout;  
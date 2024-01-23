import React from "react";  
import LandingNav from "./LandingNav";
import Footer from "./Footer";
import { useRouter } from "next/router";
import {
    sistaKimsKitchen,
    defaultKeywords,
    menuKeywords,
    locationsKeywords,
    bookingKeywords,
    siteDexcription
} from '../constants';


const Layout = ({ children }) => {
    const router = useRouter();
    let keywords;
    switch (router.pathname) {
        case "/":
            keywords = defaultKeywords;
            break;
        case "/menu":
            keywords = defaultKeywords + menuKeywords;
            break;
        case "/locations":
            keywords = defaultKeywords + locationsKeywords;
            break;
        case "/booking":
            keywords = defaultKeywords + bookingKeywords;
            break;
        default:
            keywords = defaultKeywords;
    }

    return(
        <div>
            <head>
                <title>{`${sistaKimsKitchen} - ${keywords}`}</title>
                <meta name="description" content={`${siteDexcription}`} />
            </head>
            <LandingNav />
            {children}
            <Footer />
        </div>
    )
};

export default Layout;  
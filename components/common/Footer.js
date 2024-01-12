import React from "react";
import styles from '../../styles/Home.module.css';
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "../Icons";
import {    
    footerAddress,
    footerPhoneNumber,
    footerCopyright 
} from '../constants';

const Footer = () => {
    return(
        <div className={`${styles['footer']}`}>
            <div className={`${styles['footer-nav']}`}>
                <div className={`${styles['footer-nav-info']}`}>
                    <p>{footerPhoneNumber}</p>
                    <p className={`${styles['footer-nav-info-address']}`}>{footerAddress}</p>
                    <div className={`${styles['footer-nav-socials']}`}>
                        <Link href="https://www.instagram.com/sistakimskitchen/"><InstagramIcon color='black' width='20' height='20'className='nav-link-icon'/></Link>
                        <Link href="https://www.facebook.com/Sistakimskitchen/"><FacebookIcon color='black' width='20' height='20' className='nav-link-icon'/></Link>
                    </div>
                </div>
            </div>
            <div className={`${styles['footer-copyright']}`}>
                <p>{footerCopyright}</p>
            </div>
        </div>
    );
};

export default Footer;
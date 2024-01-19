import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from '../../public/logo-updated.png'
import NeonText from "./NeonText";
import { HamburgerIcon, FacebookIcon, InstagramIcon } from "../Icons";
import styles from '../../styles/Home.module.css';

export default function LandingNav() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    /**
     * This useEffect hook is used to add a scroll event listener to the window.
     * The event listener calls the handleScroll function whenever the user scrolls.
     */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    /**
     * This useEffect hook is used to add a resize event listener to the window.
     * The event listener calls the handleResize function whenever the window is resized.
     */
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return ( 
        <div>
        <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 bg-slate-950 flex items-center justify-between pl-5 pr-5 sm:pl-10 sm:pr-10 ${isScrolled && windowWidth > 640 ? `${styles['nav-expand']}` : `${styles['nav-collapse']}`}`}>
            
            {isScrolled && windowWidth > 640 ?
                (
                <div className="flex items-center mr-2 transition-all duration-500 transform scale-100">
                    <Image id="brand-img" src={logo} alt="Sista Kim's Kitchen Logo" width={75} height={75} />
                    {/* <h1 className="font-bold">SISTA <br /> KIMS</h1> */}
                    <div id="brand-text" className="flex gap-2">
                        <NeonText text="SISTA" color="neonpurple-text" />
                        <NeonText text="KIM'S" color="neonorange-text"/>
                    </div>
                </div>
                )
            :
                (
                <div className={`flex items-center mr-2 transition-all duration-500 transform ${isScrolled && windowWidth > 640? 'scale-0' : 'scale-100'}`}>
                    <Image id="brand-img" src={logo} alt="Sista Kim's Kitchen Logo" width={100} height={100} />
                    {/* <h1 className="font-bold">SISTA <br /> KIMS</h1> */}
                    <div id="brand-text" >
                        <NeonText text="SISTA" color="neonpurple-text" />
                        <NeonText text="KIM'S" color="neonorange-text"/>
                    </div>
                </div> 
                )
            }
            <div className="lg:hidden">
                <button type="button" className="text-gray-500 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerIcon />
                </button>
            </div>
            <div className={`hidden gap-6 lg:relative lg:bg-transparent lg:p-0 lg:mt-0 lg:shadow-none lg:flex lg:items-center`}>
                <Link href="/" className={`${styles['nav-link']} px-2 font-bold ${router.pathname === "/" ? `${styles['nav-link-active']}` : ""}`}>Home</Link>
                <Link href="/menu" className={`${styles['nav-link']} px-2 font-bold ${router.pathname === "/menu" ? `${styles['nav-link-active']}` : ""}`}>Menu</Link>
                <Link href="/locations" className={`${styles['nav-link']} px-2 font-bold ${router.pathname === "/locations" ? `${styles['nav-link-active']}` : ""}`}>Locations</Link>
                <Link href="/booking" className={`${styles['nav-link']} px-2 font-bold ${router.pathname === "/booking" ? `${styles['nav-link-active']}` : ""}`}>Booking</Link>
                <Link href="https://www.clover.com/online-ordering/sister-kims-kitchen-las-vegas" className={`${styles['nav-link-btn']} px-2 font-bold`}>Order Online</Link>
            </div>
            <div className={`hidden ml-10 lg:relative lg:bg-transparent lg:p-0 lg:mt-0 lg:shadow-none lg:flex lg:items-center`}>
                <Link href="https://www.instagram.com/sistakimskitchen/"><InstagramIcon color='#fff' width='30' height='30'className='nav-link-icon'/></Link>
                <Link href="https://www.facebook.com/Sistakimskitchen/"><FacebookIcon color='#fff' width='30' height='30' className='nav-link-icon'/></Link>
            </div>

        </nav>
        <div className={`fixed top-15 left-0 right-0 z-50 lg:hidden ${isOpen ? `${styles['nav-dropdown']} ${styles['open']}` : `${styles['nav-dropdown']}`} flex flex-col items-center text-center`}>
                <Link href="/" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/" ? "" : ""}`}>Home</Link>
                <Link href="/menu" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/menu" ? "" : ""}`}>Menu</Link>
                <Link href="/locations" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/locations" ? "" : ""}`}>Locations</Link>
                <Link href="/booking" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/booking" ? "" : ""}`}>Booking</Link>
                <Link href="https://www.clover.com/online-ordering/sister-kims-kitchen-las-vegas" className="px-2 font-bold flex-grow border-b border-gray-200 w-full ">Order Online</Link>
                <Link href="https://www.instagram.com/sistakimskitchen/" className="px-2 font-bold flex-grow border-b border-gray-200 w-full ">Instagram</Link>
                <Link href="https://www.facebook.com/Sistakimskitchen/" className="px-2 font-bold ">Facebook</Link>
        </div>
        </div>
    )
}

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return ( 
        <div>
        <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 bg-slate-950 flex items-center justify-between pl-10 pr-10 ${isScrolled ? 'nav-expand' : 'nav-collapse'}`}>
            
            {isScrolled?
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
                <div className={`flex items-center mr-2 transition-all duration-500 transform ${isScrolled ? 'scale-0' : 'scale-100'}`}>
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
            <div className={`hidden lg:relative lg:bg-transparent lg:p-0 lg:mt-0 lg:shadow-none lg:flex lg:items-center text-slate-50`}>
                <Link href="/" className={`nav-link px-2 font-bold ${router.pathname === "/" ? "nav-link-active" : ""}`}>Home</Link>
                <Link href="/gallery" className={`nav-link px-2 font-bold ${router.pathname === "/gallery" ? "nav-link-active" : ""}`}>Gallery</Link>
                <Link href="/#" className={`nav-link px-2 font-bold ${router.pathname === "/locations" ? "nav-link-active" : ""}`}>Locations</Link>
                <Link href="/booking" className={`nav-link px-2 font-bold ${router.pathname === "/booking" ? "nav-link-active" : ""}`}>Booking</Link>
                <Link href="/#" className="nav-link px-2 font-bold">Order Online</Link>
                <div className="flex ml-10">
                    <Link href="https://www.instagram.com/sistakimskitchen/"><InstagramIcon color='white' width='30' height='30'/></Link>
                    <Link href="https://www.facebook.com/Sistakimskitchen/"><FacebookIcon color='white' width='30' height='30'/></Link>
                </div>
            </div>

        </nav>
        <div className={`fixed top-15 left-0 right-0 z-50 lg:hidden ${isOpen ? `${styles['nav-dropdown']} ${styles['open']}` : `${styles['nav-dropdown']}`} flex flex-col items-center text-center`}>
                <Link href="/" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/" ? "" : ""}`}>Home</Link>
                <Link href="/gallery" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/gallery" ? "" : ""}`}>Gallery</Link>
                <Link href="/booking" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/booking" ? "" : ""}`}>Booking</Link>
                <Link href="/#" className="px-2 font-bold">Order Online</Link>
        </div>
        </div>
    )
}

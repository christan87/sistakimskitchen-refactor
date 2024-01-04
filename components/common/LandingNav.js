import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from '../../public/logo-updated.png'
import NeonText from "./NeonText";
import { HamburgerIcon } from "./HamburgerIcon";
import styles from '../../styles/Home.module.css';

export default function LandingNav() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div>
        <nav className="flex items-center justify-between ml-10 mr-10">
            <div className="flex items-center mr-2">
                <Image src={logo} alt="Sista Kim's Kitchen Logo" width={100} height={100} />
                {/* <h1 className="font-bold">SISTA <br /> KIMS</h1> */}
                <div>
                <NeonText text="SISTA" color="neonpurple-text" />
                <NeonText text="KIM'S" color="neonorange-text"/>
                </div>
            </div>
            <div className="lg:hidden">
                <button type="button" className="text-gray-500 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerIcon />
                </button>
            </div>
            <div className={`hidden lg:relative lg:bg-transparent lg:p-0 lg:mt-0 lg:shadow-none lg:flex lg:items-center`}>
                <Link href="/" className={`px-2 font-bold ${router.pathname === "/" ? "" : ""}`}>Home</Link>
                <Link href="/gallery" className={`px-2 font-bold ${router.pathname === "/gallery" ? "" : ""}`}>Gallery</Link>
                <Link href="/booking" className={`px-2 font-bold ${router.pathname === "/booking" ? "" : ""}`}>Booking</Link>
                <Link href="/#" className="px-2 font-bold">Order Online</Link>
            </div>
        </nav>
        <div className={`lg:hidden ${isOpen ? `${styles['nav-dropdown']} ${styles['open']}` : `${styles['nav-dropdown']}`} flex flex-col items-center text-center`}>
                <Link href="/" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/" ? "" : ""}`}>Home</Link>
                <Link href="/gallery" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/gallery" ? "" : ""}`}>Gallery</Link>
                <Link href="/booking" className={`px-2 font-bold flex-grow border-b border-gray-200 w-full ${router.pathname === "/booking" ? "" : ""}`}>Booking</Link>
                <Link href="/#" className="px-2 font-bold">Order Online</Link>
        </div>
        </div>
    )
}

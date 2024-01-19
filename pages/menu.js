import React from 'react';
import Layout from '../components/common/Layout';
import styles from '../styles/Home.module.css';
import MenuSection from '../components/menu/MenuSection';
import menu from '../components/constants/menu';

export default function Booking() {
    return(
        <Layout>
            <main>
                <section className="pt-20">
                    <div className={`${styles['menu']}`}>
                        <div className={`pt-10 ${styles['menu-col']} ${styles['menu-col-1']}`} >
                            <MenuSection menu={menu[0]}/>
                            <MenuSection menu={menu[1]}/>
                            <MenuSection menu={menu[2]}/>
                        </div>
                        <div className={`${styles['menu-col']} ${styles['menu-col-2']}`} >
                            <div className={`${styles['menu-col-logo-container']}`}>
                                <div className={`${styles['menu-col-logo']}`} />
                            </div>
                            <div className={`${styles['menu-col-logo-header']}`}>
                                <h1>Menu</h1>
                            </div>
                            <MenuSection menu={menu[3]}/>
                            <MenuSection menu={menu[4]}/>
                        </div>
                        <div className={`pt-10 ${styles['menu-col']} ${styles['menu-col-3']}`} >
                            <MenuSection menu={menu[5]}/>
                            <MenuSection menu={menu[6]}/>
                            <MenuSection menu={menu[7]}/>
                            <MenuSection menu={menu[8]}/>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};
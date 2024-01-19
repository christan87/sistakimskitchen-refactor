import React from 'react'
import styles from '../../styles/Home.module.css';

export default function MenuSection({menu}) {
    return(
        <div className={`${styles['menu-section']}`}>
            <div className={`${styles['menu-section-title']}`}>
                <h1>{menu.title} </h1>
                <div className={`${styles['menu-section-title-additional']}`}>
                    {menu.titleAside&& <h2>{`(${menu.titleAside})`}</h2>}
                    {menu.additionalInfo&&<h3>{`( ${menu.additionalInfo} )`}</h3>}
                </div>
            </div>
            {/* conditionally displays the title-info if it exists */}
            {menu.titleInfo &&
            <div className={`${styles['menu-section-title-info']}`}>
                <h1>{menu.titleInfo} </h1>
            </div>
            }
            <div className={`${styles['menu-section-items-list']}`}>
                {menu.items.map((item, index) => {
                    return(
                        <div className={`${styles['menu-section-items-list-item']}`} key={`${index}${item.item}`}>
                            <h1>{item.item}</h1>
                            <span className={`${styles['menu-section-items-list-item-spacer']}`}>
                                {`....................................................................................................................................`}
                            </span>
                            <h2>{item.price}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
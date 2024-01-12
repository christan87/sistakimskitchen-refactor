import React from "react";
import styles from '../../styles/Home.module.css';

const ScrollingReviews = ({children}) => {
    return(
        <div className={`${styles['scrolling-review']}`}>
            <div className={`${styles['scrolling-review-content']}`}>
                <div className={`${styles['scrolling-review-content-bar-1']} ${styles['scrolling-review-animate']} flex`}>
                    {children}
                </div>
                <div className={`${styles['scrolling-review-content-bar-2']} ${styles['scrolling-review-animate']} flex`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ScrollingReviews;
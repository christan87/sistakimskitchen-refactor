import React from "react";
import Link from "next/link";
import { StarIcon } from "../Icons";

import styles from '../../styles/Home.module.css';

const Review = ({review}) => {
    return(
        <div className={`${styles['review']} flex flex-col items-center justify-center`}>
            <h1 className=" text-3xl">- {review.reviewer}</h1>
            <div className="flex gap-2">
                <p>{review.date}</p>
                <div className="flex">
                    {[...Array(review.stars)].map((star, i) => {
                    return <StarIcon color='yellow' height='20' width='20' key={i} />;
                    })}
                </div>
            </div>
            <div className={`${styles['review-text']}`}>
                <p>{review.text}</p>    
            </div>
            <Link href={review.link} className={`${styles['review-link']}`}>Read More</Link>
        </div>
    );
};

export default Review;
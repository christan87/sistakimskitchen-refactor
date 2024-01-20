import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function CateringCard({img, title, txt, link="#", imgAlt}) {
    return (
        <div className={`${styles['catering-card']}`}>
            <div className={`${styles['catering-card-img-div']}`}>
                <Image src={img} alt={imgAlt} width={`640`} height={`640`} className={`${styles['catering-card-img']}`}/>
            </div>
            <div className={`${styles['catering-card-content']}`}>
                <div className={`${styles['catering-card-content-title']}`}>
                    <h1>
                        {title}
                    </h1>
                </div>
                <div className={`${styles['catering-card-content-text']}`}>
                    <p>{txt}</p>
                </div>
                {/* Spacer */}
                <div className={`${styles['catering-card-content-spacer']}`} />

                <div className={`${styles['catering-card-content-btn']}`}>
                    <Link href={link}>More</Link>
                </div>
            </div>
        </div>
    )
}
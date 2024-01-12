import styles from '../../styles/Home.module.css';

export default function StarIcon({width, height, color, className}) {
    return(
        <svg fill={`${color}`} width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className={`${className}`}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
    )
}
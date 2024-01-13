import styles from '../../styles/Home.module.css';

export default function CloseIcon({width='14', height='14', color='white', className}) {
    return(
        <svg fill={`${color}`} width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className={`${className}`}>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
    )
}
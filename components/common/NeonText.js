import styles from '../../../styles/Home.module.css';

export default function NeonText({text, color}) { 
    return(
        <div>
            <h1 className={`leading-10 ${styles[color]} russo-font font-bold`}>{text}</h1>
        </div>
    )
}
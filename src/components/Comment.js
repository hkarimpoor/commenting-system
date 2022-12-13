import styles from '../styles/Comment.module.css';

export default function Comment({ uuid, text }) {
    return (

        <div id={uuid} className={styles.container}>
            <div className={styles.avatar_section}>
                <img src="abc" alt="abc" />
            </div>
            <div className={styles.content_section}>
                <div className={styles.info_section}></div>
                <p className={styles.text_section}>{text}</p>
                <div className={styles.actions_section}></div>
            </div>
        </div>     
        
    )
}
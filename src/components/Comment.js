import styles from '../styles/Comment.module.css';

export default function Comment({ cmtUUID }) {
    return (

        <div id={cmtUUID} className={styles.container}>
            <div className={styles.avatar_section}>
                <img src="abc" alt="abc" />
            </div>
            <div className={styles.content_section}>
                <div></div>
            </div>
        </div>     
        
    )
}
import styles from './PostCard.module.css'
interface props {
    title: string
    body: string
}
const PostCard = ({title, body}:props) => {
    return (
        <div>
            <div className={styles.cardTitle}>
                Post title is:
                {title}
            </div>
            <div className={styles.cardBody}>
                Post body is:
                {body}
            </div>
        </div>
    );
};

export default PostCard;
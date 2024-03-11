import styles from './PostCard.module.css'
import {Link} from "react-router-dom";
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
            <Link className={styles.link} to={'/'}>Back to list</Link>
        </div>
    );
};

export default PostCard;
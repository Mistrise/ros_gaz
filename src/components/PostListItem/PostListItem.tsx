import styles from './PostListItem.module.css'
import {Link} from "react-router-dom";

export interface Post {
    id: number
    title: string
}

const PostListItem = (props: Post) => {
    return (
        <>
            <li className={styles.listItem}>
                <span>
                    <Link className={styles.link} to={`posts/${props.id}`}>{props.title}</Link>
                </span>
            </li>
        </>
    );
};

export default PostListItem;
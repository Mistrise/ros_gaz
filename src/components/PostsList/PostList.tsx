import styles from './PostList.module.css'
import React from "react";

interface props {
    children: React.ReactNode
}
const PostList = ({children}: props) => {
    return (
        <div className={styles.list}>
            <h2>List of posts</h2>
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default PostList;
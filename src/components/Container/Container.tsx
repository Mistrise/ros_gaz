import styles from './Container.module.css'
import React from "react";

interface props {
    children: React.ReactNode
}

const Container = ({children}: props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;
// Notification.js
import React from 'react';
import styles from './App.module.scss';


const Notification = () => {
    return (
        <div className={styles.notification_div}>
            <h2 className={styles.notification_text}>Ruota il dispositivo in verticale!</h2>
        </div>
    );
};

export default Notification;

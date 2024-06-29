// Notification.js
import React from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

const Notification = () => {
    return (
        <div className="notification-container">
            <div className="notification-message">
                <h1>Please rotate your device back to portrait mode.</h1>
            </div>
        </div>
    );
};

export default Notification;

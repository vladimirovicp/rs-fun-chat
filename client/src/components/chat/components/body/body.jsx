import React from 'react';
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom";

const body = () => {

    const navigate = useNavigate();
    const handleLeave = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <>
            <header className={styles.header}>
                <button className='btn' onClick={handleLeave}>Покинуть чат</button>
            </header>

            <div className={styles.container}>
                <div className={styles.chats}>
                    <p className={styles.senderName}>Вы</p>
                    <div className={styles.messageSender}>
                        <p>Hellow</p>
                    </div>
                </div>

                <div className={styles.chats}>
                    <p>Вы</p>
                    <div className={styles.messageRecipent}>
                        <p>Hellow</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default body;
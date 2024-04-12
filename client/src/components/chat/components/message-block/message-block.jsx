import React, { useState } from 'react';
import styles from "./styles.module.css";

const messageBlock = ({socket}) => {
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();

        console.log(socket);


        // console.log({
        //     user: localStorage.getItem('user'), 
        //     message
        // })
        if(message.trim() && localStorage.getItem('user')){
            socket.send('message', {
                id: `${socket.id}`,
                type: "MSG_SEND",
                payload: {
                  message: {
                    to: 'test',
                    text: message,
                  }
                }
              })
        }
        setMessage('');
    }

    return (
        <div className={styles.messageBlock}>
            <form  className={styles.form} onSubmit={handleSend}>
                <input 
                type="text" 
                className={styles.userMessage} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className={styles.btn}>Сказать</button>
            </form>
        </div>
    );
};

export default messageBlock;
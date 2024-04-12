import React from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Body from "./components/body/body.jsx";
import MessageBlock from "./components/message-block/message-block.jsx";
import styles from "./styles.module.css";

const ChatPage = ({socket}) => {

    return (
      <div className={styles.chat}>
          <Sidebar />
          <main className={styles.main}>
            <Body />
            <MessageBlock socket={socket}/>
          </main>
      </div>
    )
  }
  
  export default ChatPage
import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";


let Dialogs = (props) => {
  let messagesAuthors = props.dialogsPage.authorsMessagesData.map((dialoger) => {
    return <DialogItem name={dialoger.name} avatarImageLink={dialoger.avatarImageLink} id={dialoger.id} key={dialoger.id} />;
  });
  let messagesContent = props.dialogsPage.messagesContentData.map((message) => {
    return <Message message={message.message} id={message.id} key={message.id} />;
  });
  let addMessage=()=>{
    props.addMessage();

  }
  let onMessageChange=(e)=>{
    let text=e.target.value;
    props.onMessageChange(text)
  }
  if (!props.isAuth) return <Navigate to={"/login"}/>
  return (
      <div>
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{messagesAuthors}</div>
      <div className={styles.messages}>{messagesContent}</div>
    </div>

        <div className={styles.addPost}>
          <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} placeholder='Enter your message'/>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
  );
};
export default Dialogs;

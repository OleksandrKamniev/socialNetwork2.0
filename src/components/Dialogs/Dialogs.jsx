import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageAC, messageChangeAC} from "../redux/dialogsReducer";

let Dialogs = (props) => {
  let messagesAuthors = props.dialogsPage.authorsMessagesData.map((dialoger) => {
    return <DialogItem name={dialoger.name} avatarImageLink={dialoger.avatarImageLink} id={dialoger.id} />;
  });
  let messagesContent = props.dialogsPage.messagesContentData.map((message) => {
    return <Message message={message.message} id={message.id} />;
  });

  let addMessage=()=>{
    props.dispatch(sendMessageAC());
  }
  let onMessageChange=(e)=>{
    let text=e.target.value;
    props.dispatch(messageChangeAC(text))
  }
  return (
      <div>
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{messagesAuthors}</div>
      <div className={styles.messages}>{messagesContent}</div>
    </div>
        <div className={styles.addPost}>
          <textarea onChange={onMessageChange} value={props.newMessageText} placeholder='Enter your message'/>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
  );
};
export default Dialogs;

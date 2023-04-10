import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageAC, messageChangeAC} from "../redux/state";

let Dialogs = (props) => {
  let messagesAuthors = props.dialogsPage.authorsMessagesData.map((dialoger) => {
    return <DialogItem name={dialoger.name} avatarImageLink={dialoger.avatarImageLink} id={dialoger.id} />;
  });
  let messagesContent = props.dialogsPage.messagesContentData.map((message) => {
    return <Message message={message.message} id={message.id} />;
  });
let newMessageElement=React.createRef();
  let addMessage=()=>{
    props.dispatch(addMessageAC())
  }
  let onMessageChange=()=>{
    let text=newMessageElement.current.value;
    props.dispatch(messageChangeAC(text))
  }
  return (
      <div>
        <div className={styles.addPost}>
          <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
          <button onClick={addMessage}>Add message</button>
        </div>
    <div className={styles.dialogs}>

      <div className={styles.dialogsItems}>{messagesAuthors}</div>
      <div className={styles.messages}>{messagesContent}</div>

    </div>
      </div>
  );
};
export default Dialogs;

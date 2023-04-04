import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

let Dialogs = (props) => {
  let messagesAuthors = props.dialogsPage.authorsMessagesData.map((dialoger) => {
    return <DialogItem name={dialoger.name} avatarImageLink={dialoger.avatarImageLink} id={dialoger.id} />;
  });
  let messagesContent = props.dialogsPage.messagesContentData.map((message) => {
    return <Message message={message.message} id={message.id} />;
  });
let newPostElement=React.createRef();
  let addMessage=()=>{
    let text=newPostElement.current.value;
    alert(text)
  }
  return (
      <div>
        <div className={styles.addPost}>
          <textarea ref={newPostElement}></textarea>
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

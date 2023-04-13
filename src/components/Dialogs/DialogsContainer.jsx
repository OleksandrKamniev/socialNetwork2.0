import React from "react";
import styles from "./Dialogs.module.css";
import {sendMessageAC, messageChangeAC} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContent from "../../StoreContent";

let DialogsContainer = (props) => {

    return <StoreContent.Consumer>
        {
        (store) => {
          let state = store.getState().dialogsPage;
          let addMessage = () => {
            store.dispatch(sendMessageAC());
          }
          let onMessageChange = (text) => {
            store.dispatch(messageChangeAC(text))
          }
            return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogsPage={state}/>
        }
    }
    </StoreContent.Consumer>
}
export default DialogsContainer;

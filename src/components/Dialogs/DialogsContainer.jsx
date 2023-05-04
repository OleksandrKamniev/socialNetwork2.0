
import {sendMessageAC, messageChangeAC} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
let mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage,
    }

}
let mapDispatchToProps=(dispatch)=>{
    return{
        addMessage: ()=> {
            dispatch(sendMessageAC())
        },
        onMessageChange:  (text) => {
            dispatch(messageChangeAC(text))
        }
    }
}
compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);

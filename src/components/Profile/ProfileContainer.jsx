import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../redux/profileReducer";
import { useParams} from 'react-router-dom'
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=26680;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }
  render (){
      return (
          <Profile {...this.props} profile={this.props.profile} status={this.props.status} update={this.props.updateStatus} />
      )
  }
}


let mapStateToProps=(state)=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});



export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)
(ProfileContainer)


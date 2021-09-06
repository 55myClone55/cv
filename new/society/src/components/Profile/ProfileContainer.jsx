import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Component, withAuthRedirect } from './../../hoc/withAuthRedirect'
import { getUserProfile } from "../redux/Profile_reducer";
import { compose } from "redux";
import { getStatus, updateStatus } from "../redux/Profile_reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }


    render() {

        return <div>
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer)


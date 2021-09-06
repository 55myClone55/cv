import React from 'react';
import { connect } from 'react-redux';
import { getUsers, follow, unfollow, setCurrentPage, toggleFollowingProgres } from '../redux/users_reducer';
import Users from './Users';
import Svg from '../common/svg/Svg'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getFollowingInProgress, getPageSize, getTotalUsersCount, getCurrentPage, getIsFerching, getUsersPage } from '../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize);
    }
    render() {



        return <>
            {this.props.isFerching ? <Svg /> : null}
            <Users totalUsersCount={this.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersPage(state),
        //users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFerching: getIsFerching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgres, getUsers })
)(UsersContainer)
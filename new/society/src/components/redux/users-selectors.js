import { createSelector } from "reselect"


const getUsersPageSelector = (state) => {
    return state.usersPage.users
}
export const getUsersPage = createSelector(getUsersPageSelector,
    (users) => {
        return users.filter(u => true)
    })
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFerching = (state) => {
    return state.usersPage.isFerching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

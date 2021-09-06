import profileReducer from "./Profile_reducer";
import dialogsReducer from "./Dialogs_reducer ";
import sidebarReducer from "./Sidebar_reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'hi,mahai!', likesCount: 10 },
                { id: 2, message: 'hi, sam mahai', likesCount: 19 }
            ],
            newPostText: 'Hi mahai'
        },
        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Kent' },
                { id: 2, name: 'Brat' },
                { id: 3, name: 'Marat' },
                { id: 4, name: 'Yaya' },
                { id: 5, name: 'Malena' },
                { id: 6, name: 'Drunya' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'Mahai' },
                { id: 3, message: 'Zaryazai' },
                { id: 4, message: 'Za' },
                { id: 5, message: 'Zay' }

            ],
            newMessageBody: ""

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }

}




export default store;
window.store = store;
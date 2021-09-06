import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from './Profile_reducer';
import dialogsReducer from './Dialogs_reducer ';
import sidebarReducer from './Sidebar_reducer';
import usersReduser from "./users_reducer";
import authReduser from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app_reducer ";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
})


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//window.store = store;

export default store;
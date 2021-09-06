import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import s from './MyPosts.module.css';
import Post from './Post/Post ';
import { required, maxLengthCreator } from "./../../../utils/validator/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const MyPosts = React.memo(props => {


    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state
    // }

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
        //props.dispatch(addPostActionCreator());
    }

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>

    )
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='your message'
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)
export default MyPosts
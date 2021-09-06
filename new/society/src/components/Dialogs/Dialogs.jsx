import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validator/validators';
import AddMessageForm from './AddmessageForm/AddMessageForm';



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => < DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagessElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagessElements}</div>

            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}


export default Dialogs;
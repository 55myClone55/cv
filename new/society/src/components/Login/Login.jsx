import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validator/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { connect } from 'react-redux'
import { login } from '../redux/auth_reducer'
import { Redirect } from 'react-router-dom'
import { s } from './Login.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} />remember me
            </div>
            {props.error && <div>
                {props.error}
            </div>
            }
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return <div>
        <h1>login</h1>
        < LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);
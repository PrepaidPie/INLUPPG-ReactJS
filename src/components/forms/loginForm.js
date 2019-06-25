import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../store/actions/authActions'

class LoginForm extends Component {
    
    state = {
        email: '',
        password: ''
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = e => {
        this.setState( { [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        let credentials = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(credentials)
    }

    render() {

        const { email, password } = this.state
        const { token, currentUser, statusMessage, errorMessage } = this.props

        if(token && currentUser) return <Redirect to='/profile' />
        if(errorMessage) { console.log("ErrorMessage: " + errorMessage) }

        return(
            <div className="my-5">
                <form onSubmit={ this.handleSubmit } noValidate>
                    <div className="form-group">
                        <label htmlFor="email">E-post</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="E-postadress" value={email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Lösenord</label>
                        <input type="password" className="form-control" id="password" placeholder="Lösenord" value={password} onChange={this.handleChange}  />
                    </div>
                    <button type="submit" className="btn" disabled={!this.validateForm()}>Logga in</button>
                </form>
                <div className="my-5"><strong>StatusMessage: </strong> { statusMessage }</div>
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        currentUser: state.auth.currentUser,
        statusMessage: state.auth.statusMessage,
        errorMessage: state.auth.errorMessage      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
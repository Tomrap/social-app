import React, { Component } from 'react';
import countryList from 'react-select-country-list'
import { FirebaseContext } from '../firebase';
import LoginRedirect from './loginRedirect'

class Register extends Component {
    constructor(props) {
        super(props)
        this.countryOptions = countryList().getData().map(el => <option value={el.label}>{el.label}</option>)
    }

    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
        age: "",
        country: ""
    }

    formHandler = (event) => {
        event.preventDefault()
        let context = this.context;
        context.signup(this.state.email, this.state.password, () => {
            const user = {...this.state}
            delete user.password
            //possible race condition in UserProvider, might get user before it was added to database so signout here and login manually
            context.registerUser(user).then(()=>context.signout())
        })
    }

    updateValue = (event, field) => {
        const formValue = event.target.value;
        let object = {}
        object[field] = formValue;
        this.setState(
            object
        )
    }

    render() {
        return (
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
                <div className="signup-form-wrapper">
                    <h1 className="create-acc text-center">Create An Account</h1>
                    <div className="signup-inner text-center">
                        <h3 className="title">Welcome to Adda</h3>
                        <form className="signup-inner--form" onSubmit={this.formHandler}>
                            <div className="row">
                                <div className="col-12">
                                    <input type="email" className="single-field" placeholder="Email" onChange={(event) => this.updateValue(event,"email")}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="single-field" placeholder="First Name" onChange={(event) => this.updateValue(event,"firstName")}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="single-field" placeholder="Last Name" onChange={(event) => this.updateValue(event,"lastName")}/>
                                </div>
                                <div className="col-12">
                                    <input type="password" className="single-field" placeholder="Password" onChange={(event) => this.updateValue(event,"password")}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="single-field" placeholder="Age" onChange={(event) => this.updateValue(event,"age")}/>
                                </div>
                                <div className="col-md-6">
                                    <select className="nice-select" name="sortby"  onChange={(event) => this.updateValue(event,"gender")}>
                                        <option value="Undefined">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <select className="nice-select" name="sortby"  onChange={(event) => this.updateValue(event,"country")}>
                                        {this.countryOptions}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button className="submit-btn">Create Account</button>
                                </div>
                            </div>
                            <h6 className="terms-condition">I have read & accepted the <a href="#">terms of use</a></h6>
                        </form>
                    </div>
                </div>
            </div>
        )
    }       
}
Register.contextType = FirebaseContext;      
export default LoginRedirect(Register);
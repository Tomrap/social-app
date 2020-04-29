import React, { Component } from 'react';
import { FirebaseContext } from '../firebase';


class Login extends Component {

    state = {
        name: "",
        password: ""
    }

    formHandler = () => {
        let context = this.context;
        context.signin(this.state.name, this.state.password, () => {
            const user = {...this.state}
            delete user.password
            context.signout();
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
            <div className="col-lg-6">
                <div className="login-area">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm">
                            <input type="text" placeholder="Email or Username" className="single-field" onChange={(event) => this.updateValue(event,"name")}/>
                        </div>
                        <div className="col-12 col-sm">
                            <input type="password" placeholder="Password" className="single-field" onChange={(event) => this.updateValue(event,"password")}/>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <button className="login-btn" onClick={this.formHandler}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
Login.contextType = FirebaseContext;  

export default Login;
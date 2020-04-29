import React, { Component } from 'react';
import { FirebaseContext } from '../firebase';
import { Redirect } from "react-router-dom";
import { UserContext } from "../login/UserProvider";


class Login extends Component {

    state = {
        name: "",
        password: ""
    }

    formHandler = () => {
        let context = this.context;
        context.signin(this.state.name, this.state.password)
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
        return <UserContext.Consumer>
            {context => 
            {
                if(context) {
                    return <Redirect to="/MainPage"/>
                } else {
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
        }
        </UserContext.Consumer>
    }
}
Login.contextType = FirebaseContext;  

export default Login;
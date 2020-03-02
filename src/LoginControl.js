import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false ,
        title:"Please,Login"}
    }
    handleLogin = () => {
        this.setState({ isLoggedIn: false, title: "Please,Login" });
    }
    handleLogout = () => {
        this.setState({ isLoggedIn: true, title: "Login success" });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let greeting;
        if (isLoggedIn) {
            button = <button onClick={this.handleLogin}>LOGOUT</button>
        } else {
            button = <button onClick={this.handleLogout}>LOGIN</button>
        }

        return (
            <div>
    <h1>{this.state.title}</h1>
                {button}
            </div>
        )
    }
}
export default LoginControl;

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import '../cssFiles/Login.css';
import { Button } from 'react-bootstrap';

class Login extends Component {

    state = {
        counter: 0
    }

    submit = () =>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    render() {
        return (
            <div className='Login'>
                <Button>Login Here</Button>
                <p>This is props name: {this.props.name}</p>
                <div style={{textAlign:'left'}}>
                    <br />
                    {this.state.counter}
                    <br />
                    <input type={'button'} onClick={this.submit} value="Submit"/>
                </div>
            </div>
        );
    }
}
export default Login;

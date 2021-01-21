import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : ''
    }
    hadleChange = (e) => {
        this.setState ({
            [e.target.id] : e.target.value,   
        })
    }
    hadleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.hadleSubmit} className = "white">
                    <h5 className = "grey-text text-darken-3">
                        Sign-Up
                    </h5> 
                    <div className = "input-field">
                        <label htmlFor="email">Email</label> 
                        <input type="email" id="email" onChange = {this.hadleChange}/>
                    </div>     
                    <div className = "input-field">
                        <label htmlFor="password">Password</label> 
                        <input type="password" id="password" onChange = {this.hadleChange}/>
                    </div> 
                    <div className = "input-field">
                        <label htmlFor="lastName">Last Name</label> 
                        <input type="text" id="lastName" onChange = {this.hadleChange}/>
                    </div>        
                    <div className = "input-field">
                        <label htmlFor="firstName">First Name</label> 
                        <input type="text" id="firstName" onChange = {this.hadleChange}/>
                    </div>        
                    <div className = "input-field">
                        <button className = "btn pink lighten-1">Sign Up</button>
                    </div> 
                    
                </form>
            </div>
        )
    }
}

export default SignUp

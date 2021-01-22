import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title : '',
        content : ''
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
                        Sign-In
                    </h5> 
                    <div className = "input-field">
                        <label htmlFor="title">Title</label> 
                        <input type="text" id="title" onChange = {this.hadleChange}/>
                    </div>     
                    <div className = "input-field">
                        <label htmlFor="content"> Project Content</label> 
                        <textarea id = "content" className = "materialize-textarea" onChange = {this.hadleChange}></textarea>
                    </div>    
                    <div className = "input-field">
                        <button className = "btn pink lighten-1">Create</button>
                    </div> 
                    
                </form>
            </div>
        )
    }
}

export default CreateProject

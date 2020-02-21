import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormSucces from './FormSuccess';
export default class UserForm extends Component {
    constructor(){
        super()
        this.state={
            step:1,  
            name:'',
            email:'',
            number:'',
            message:''
        }
    }

//Proceed to next Step
nextStep=()=>{
    const {step}=this.state;
    this.setState({
        step:step+1
    })
}

//Proceed to next Step
prevStep=()=>{
    const {step}=this.state;
    this.setState({
        step:step-1
    })
}

//handleChange
handleChange=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

    render() {
        const {step}=this.state;
        const {name,email,number,message}=this.state
       
        switch(step){
            case 1:
                return(
                    <FormUserDetails
                      nextStep={this.nextStep}
                      handleChange={this.handleChange}
                      name={name}
                      nextStep={this.nextStep}
                      email={email}
                      number={number}
                      message={message}
                      handleChange={this.handleChange}
                    />
                )

            case 2:
                return(
                    <FormSucces
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                    />
                )
            case 3:
                return <h1>Suceess</h1>
        }
    }
}

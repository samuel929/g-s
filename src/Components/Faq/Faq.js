import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './faq.scss';
import Header from './header/Header';
export default class news extends React.Component {
    constructor(){
        super()

        this.state={
         show:false,
         show1:false,
         show2:false,
         show3:false,
        }
    }

    handleClick=()=>{
        this.setState({
            show:!this.state.show
        })
    }

    
    handleClick2=()=>{
        this.setState({
            show1:!this.state.show1
        })
    }
    
    handleClick3=()=>{
        this.setState({
            show2:!this.state.show2
        })
    }

    handleClick4=()=>{
        this.setState({
            show3:!this.state.show3
        })
    }

    render(){
    return (
        <section className="row ">
            <div className="container">
               <div className="row">
                  <div className="col">
                        <div className="flex-container">
                        <p className="con-header">Construction & Commissioning</p>
                        <FontAwesomeIcon icon="arrow-down" color="grey" style={{cursor:'pointer'}} onClick={this.handleClick}/>
                        </div>
                        <hr/>
                        {
                            this.state.show ? (
                                <p className="text-muted">Paul has more than 20 years’ experience in the Australian resources sector across multiple commodities and regions. Having held senior management roles in operations, strategy, commercial and finance disciplines, Paul brings his clients a diverse set of skills and an intimate understanding of what it takes to create a successful, sustainable and enjoyable business environment. Paul is passionate about building and leading successful teams and his ability to collaborate with people from diverse cultures and backgrounds has underpinned his success to date.</p>
                            ):null
                        }
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                        <div className="flex-container">
                        <p className="con-header">Construction & Commissioning</p>
                        <FontAwesomeIcon icon="sort-down" color="grey" style={{cursor:'pointer'}} onClick={this.handleClick2}/>
                        </div>
                        <hr/>
                        {
                            this.state.show2 ? (
                                <p className="text-muted">Paul has more than 20 years’ experience in the Australian resources sector across multiple commodities and regions. Having held senior management roles in operations, strategy, commercial and finance disciplines, Paul brings his clients a diverse set of skills and an intimate understanding of what it takes to create a successful, sustainable and enjoyable business environment. Paul is passionate about building and leading successful teams and his ability to collaborate with people from diverse cultures and backgrounds has underpinned his success to date.</p>
                            ):null
                        }
                  </div>
                </div>
               <div className="row">
                  <div className="col">
                    <div className="col">
                            <div className="flex-container">
                            <p className="con-header">Construction & Commissioning</p>
                            <FontAwesomeIcon icon="sort-down" color="grey" style={{cursor:'pointer'}}onClick={this.handleClick3}/>
                            </div>
                            <hr/>
                            {
                                this.state.show3 ? (
                                    <p className="text-muted">Paul has more than 20 years’ experience in the Australian resources sector across multiple commodities and regions. Having held senior management roles in operations, strategy, commercial and finance disciplines, Paul brings his clients a diverse set of skills and an intimate understanding of what it takes to create a successful, sustainable and enjoyable business environment. Paul is passionate about building and leading successful teams and his ability to collaborate with people from diverse cultures and backgrounds has underpinned his success to date.</p>
                                ):null
                            }
                    </div>
                  </div>
               </div>
               <div className="row">
               <div className="col">
                    <div className="col">
                            <div className="flex-container">
                            <p className="con-header">Construction & Commissioning</p>
                            <FontAwesomeIcon icon="sort-down" color="grey" style={{cursor:'pointer'}} onClick={this.handleClick4}/>
                            </div>
                            <hr/>
                            {
                                this.state.show4 ? (
                                    <p className="text-muted">Paul has more than 20 years’ experience in the Australian resources sector across multiple commodities and regions. Having held senior management roles in operations, strategy, commercial and finance disciplines, Paul brings his clients a diverse set of skills and an intimate understanding of what it takes to create a successful, sustainable and enjoyable business environment. Paul is passionate about building and leading successful teams and his ability to collaborate with people from diverse cultures and backgrounds has underpinned his success to date.</p>
                                ):null
                            }
                    </div>
                  </div>
               </div>
            </div>
        </section>
    )
}
}

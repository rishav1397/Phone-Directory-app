import React,{Component} from 'react';
import {Fragment} from 'react';
import Header from './Header';
import './addsubscriber.css';
class AddSubsriber extends Component{
  constructor(){
    super();
    this.state={
      id:0,
      name:'',
      phone:''
    }
  }
  inputHandler=(e)=>{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState(state);
  }
  onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.addSubscriber(this.state);
    this.setState({id:0,name:'',phone:''})
  }
  render(){
    const {name,phone}=this.state;
    return(
      <div>
      <Header heading="Add Subscriber"/>
      <div className="div2">
      <button className="custom-btn">Back</button>
      <form className="subscriber-form" onSubmit={this.onFormSubmit.bind(this)}>
                          <label htmlFor="name" className="label-control">Name: </label><br/>
                          <input id="name" type="text" className="input-control" name="name" onChange={this.inputHandler}/><br/><br/>
                          <label htmlFor="phone" className="label-control">Phone: </label><br/>
                          <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputHandler}/><br/><br/>

                          <div className="subscriber-info-container">
                              <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                              <span className="subscriber-info">Name: {name} </span><br/>
                              <span className="subscriber-info">Phone: {phone} </span><br/>
                          </div>

                          <button type="submit" className="custom-btn add-btn">Add</button>
                      </form>
      </div>
      </div>
    )
  }
}
export default AddSubsriber;

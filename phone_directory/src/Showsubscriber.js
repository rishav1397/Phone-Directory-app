import React, { Component } from 'react';
import './showsubscriber.css';
import Header from './Header';
import {Link} from 'react-router-dom';
class App extends Component {

  deleteHandler(subid){
    this.props.deletehandler(subid);
  }
  render() {
    return (
      <div className="div1">
      <Header heading="Phone Directory"/>
       <div className="div2">
       <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
       <div className="grid-container heading-container">
         <span className="grid-item name-heading">Name</span>
         <span className="grid-item phone-heading">Phone</span>
       </div>
       {
           this.props.subscriberList.map(sub=>{
           return(
             <div key={sub.id} className="grid-container">
               <span className="grid-item">{sub.name}</span>
               <span className="grid-item">{sub.phone}</span>
               <button className="grid-item delete-btn" onClick={this.deleteHandler.bind(this,sub.id)}>Delete</button>
             </div>
           )
         })
       }
    </div>
  </div>
);
  }
}

export default App;

import React, { Component } from 'react';
import {Fragment} from 'react';
import logo from './logo.svg';
import './showsubscriber.css';
import Header from './Header';
import {Link} from 'react-router-dom';
class App extends Component {

  deleteHandler(message){
    alert(message);
  }
  render() {
    // let subscribers=[
    //   {
    //     id:1,
    //     name:"Rishav",
    //     phone:"9756445123"
    //   },
    //   {
    //     id:2,
    //     name:"Saurabh",
    //     phone:"8794562146"
    //   }
    // ]
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
               <button className="grid-item delete-btn" onClick={this.deleteHandler.bind(this,"Delete clicked!")}>Delete</button>
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

import React from 'react';
import AddSubsriber from './AddSubsriber';
import Showsubscriber from './Showsubscriber';
import {BrowserRouter as Router,Route } from 'react-router-dom';
class Phone_Directory extends React.Component{
  constructor(){
    super();
    this.state={
      subscriberList:[
        {
          id:1,
          name:'Rishav Chauhan',
          phone:'999999999',
        }
      ]
    }
  }
  addSubscriber=(newSubscriber)=>{
    let subscriberList=this.state.subscriberList;
    if(subscriberList.length>0)
    newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
    else {
      newSubscriber.id=1;
    }
    subscriberList.push(newSubscriber);
    this.setState({subscriberList:subscriberList});
    console.log(this.state.subscriberList)
  }
  render(){
    return(
      <Router>
            <div className="main-container">
            <Route excat path='/' render={(props)=> <Showsubscriber {...props} subscriberList={this.state.subscriberList}/>}/>
            <Route excat path='/add' render={({history},props)=> <AddSubsriber {...props} history={history} addSubscriber={this.addSubscriber}/>}/>
            </div>
    </Router>
    )
  }
}
export default Phone_Directory;

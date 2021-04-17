import './App.css';
import './MyPieChart.css';
import { PieChart } from 'react-minimal-pie-chart';
// import React, { useState } from 'react';
import { Component } from "react";

class App extends Component {

  constructor() {
      super() 
      this.state = {
          checking: "", 
          savings: "",
          brokerage: ""
      }
  }

  handleOnChange = (e) => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
  }

  render() {
      return (
        <div className="App">
        <h1>Financial Accounts</h1>
        <input type="text" onChange = {this.handleOnChange} placeholder="Enter checking account balance" size="50" name="checking" /><br/><br/>
         <input type="text" onChange = {this.handleOnChange} placeholder="Enter savings account balance" size="50" name="savings" /><br/><br/>
         <input type="text" onChange = {this.handleOnChange} placeholder="Enter brokerage account balance" size="50" name="brokerage" /><br/><br/><br/>
         <div className="MyPieChart">
         <PieChart
        
        data={[
          { title: 'Checking', value: this.state.checking, color: '#E38627' },
          { title: 'Savings', value: this.state.savings, color: '#C13C37' },
          { title: 'Brokerage', value: this.state.brokerage, color: '#6A2135' },
        ]}
        />
        </div>
      </div>
    
      )
  }
}

// function App() {
//   const [checking, setChecking] = useState('')
//   const [accounts, setAccounts] = useState({})

//   const handleCheckingOnChange = (e) => {
//     setChecking({
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleOnChange = (e) => {
//     setAccounts({
//       [e.target.name]: e.target.value 
//     })
//   }

//   return (
//     <div className="App">
//         <h1>Financial Accounts</h1>
//         <input type="text" onChange = {handleCheckingOnChange} placeholder="Enter checking account balance" size="50" name="checking" /><br/><br/>
//          <input type="text" onChange = {handleOnChange} placeholder="Enter savings account balance" size="50" name="savings" /><br/><br/>
//          <input type="text" onChange = {handleOnChange} placeholder="Enter brokerage account balance" size="50" name="brokerage" /><br/><br/><br/>
//          <div className="MyPieChart">
//          <PieChart checking = {checking}
//         data={[
//           { title: 'Checking', value: 99, color: '#E38627' },
//           { title: 'Savings', value: 70, color: '#C13C37' },
//           { title: 'Brokerage', value: 20, color: '#6A2135' },
//         ]}/>
//         </div>
//       </div>
//     )
//   }


export default App;

import './App.css';
import './MyPieChart.css';
import { PieChart } from 'react-minimal-pie-chart';
import React, { useState } from 'react';


function App() {
  const [account, setAccount] = useState({
    checking: 0,
    savings: 0,
    brokerage: 0
  })

  const handleOnChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  return (
    <div className="App">
        <h1>Financial Accounts</h1>
        <input type="text" onChange = {handleOnChange} placeholder="Enter checking account balance" size="50" name="checking" /><br/><br/>
         <input type="text" onChange = {handleOnChange} placeholder="Enter savings account balance" size="50" name="savings" /><br/><br/>
         <input type="text" onChange = {handleOnChange} placeholder="Enter brokerage account balance" size="50" name="brokerage" /><br/><br/><br/>
         <div className="MyPieChart">
         <PieChart radius = {30} 
        data={[
          { title: 'Checking', value: account.checking, color: '#E38627' },
          { title: 'Savings', value: account.savings, color: '#C13C37' },
          { title: 'Brokerage', value: account.brokerage, color: '#6A2135' },
        ]}/>
        </div>
      </div>
    )
  }


export default App;

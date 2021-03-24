import React, { useState, Autocomplete } from 'react';
import './App.css';
import reactDom from 'react-dom';
import Auto from './auto'

function App() {
  var stateNameArray = [];

  //const [usStates, setUsStates] = useState([])

  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      stateNameArray.push(data[i].StateName)
    }
    //console.log(stateNameArray)
  };

  getData('https://bhamilton1000.github.io/SampleData/Web-Question-001/UnitedStatesWithCounties.json');
  //console.log(stateNameArray)


  return (
    <div id='container' className="autocomplete">
      <h1>Select State</h1>
      <hr></hr>
      <Auto suggestions={stateNameArray} /><br></br>
      <label>Contains</label>
      <input type="radio"></input>
      <label>Starts With</label>
      <input type="radio"></input>
    </div>

  );
}

export default App;

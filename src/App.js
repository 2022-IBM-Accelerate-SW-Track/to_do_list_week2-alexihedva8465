import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';
//Provide the date and time of item addition
//Allow users tomark items as complete
//Remove completed items from the list
//Validate there are no duplicated items

function App() {
  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}


export default App;

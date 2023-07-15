import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/utils';
// import { Dropdown } from 'bootstrap';
import './components/utils';
import FormComponent from './components/form';
import BrandDropDown from './components/branddropdown';
import carmodel from './components/modeldropdown';
import ModelDropDown from './components/modeldropdown';
import DropdownContainer from './components/dropdowncontainer';
import MapContainer from './components/Map';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
         <h1>Get The Rates !!</h1>
         
          <p>
            Enter the following details
          </p>
       
         <FormComponent  />
        </header>
      </div>
    );
  }
}

export default App;

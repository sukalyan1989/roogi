import React, { Component } from 'react';
import ModelDropDown from './modeldropdown';
import BrandDropDown from './branddropdown';
class DropdownContainer extends Component {
    state = {
        companies: [
            {brand:'Select Brand',models:['Select Model']},
            {brand:'Maruti Suzuki',models:['Omni','Wagon R','Swift','Swift Dzire','Alto']},
            {brand:'Hyundai',models:['i10','i20','Verna']},
            {brand:'Tata Motors',models:['Safari','Jest','Tiago']}
            
        ] ,
        models:['Select Brand First']
      } 
      handleBrandSelect=(models)=>{
        // console.log('handleBrandSelect :',models)
        let item
        this.state.companies.forEach(e => {
            if (e.brand == models)
            item = e.models
        
        });
       
        console.log(item)
        this.setState({models : item})
      }
    render() { 
        return (
            <React.Fragment>
                <BrandDropDown brands={this.state.companies} onSelect={this.handleBrandSelect}/>
                <ModelDropDown models={this.state.models}/>
            </React.Fragment>
        );
    }
}
 
export default DropdownContainer;
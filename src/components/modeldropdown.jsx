import React, { Component } from 'react';
class ModelDropDown extends Component {
    state = {  
        companies: [
            {brand:'Maruti Suzuki',models:['Omni','Wagon R','Swift','Swift Dzire','Alto']},
            {brand:'Hyundai',models:['i10','i20','Verna']},
            {brand:'Tata Motors',models:['Safari','Jest','Tiago']}
        ] ,
        isClicked:false
    } 
    itemClicked=()=>{
        this.setState({isClicked:true})
    }
    render() { 
        
        return (
            <div className="col-md-4">
            <label for="inputState" className="form-label">Car Model</label>
            <select id="inputState" className="form-select" onClick={this.itemClicked} >
                { 
                // this.state.isClicked==false ? <option>Select Model</option>:
                    this.props.models.map(m=> <option  key={m} value={m}>{m}</option>)
                


                                 }
            </select>
          </div>
        );
    }
}
 
export default ModelDropDown;
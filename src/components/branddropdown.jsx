import React,{ Component } from "react";
import utils from './utils';

class BrandDropDown extends Component{

    state={
        companies: [
            {brand:'Maruti Suzuki',models:['Omni','Wagon R','Swift','Swift Dzire','Alto']},
            {brand:'Hyundai',models:['i10','i20','Verna']},
            {brand:'Tata Motors',models:['Safari','Jest','Tiago']}
        ] ,
        isClicked:false
        }
    componentDidMount(){
        // console.log(this.props.brands)
        // this.setState({companies : utils.carList})
    }
    getSelectedItem=(brand)=>{
        console.log(brand)
    }
    itemClicked=()=>{
        this.setState({isClicked:true})
        // console.log(this.state.isClicked)
    }
    render(){

        return(
            <div className="col-md-4">
            <label for="brand" className="form-label">Car Makes</label>
            <select id="brand" className="form-select" onChange={(event,value)=> this.props.onSelect(event.target.value)} >
                { 
                // this.state.isClicked==false ? <option>Select Brand</option>:
                
                    this.props.brands.map(m=> <option  key={m.brand} value={m.brand}>{m.brand}</option>)
                


                                 }
            </select>
          </div>
        );    
    }
}
export default BrandDropDown;
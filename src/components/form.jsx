import React, { Component } from 'react';
import DropdownContainer from './dropdowncontainer';
import MapContainer from './Map';
class FormComponent extends Component {
    state = {  } 
    render() { 
        return (
                          <div>
            <form className="row">


            <div className="col-12">
              <label for="inputAddress" className="form-label">From Location</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">To Location</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            </div>
          <div className='col-md-2'></div>
          <DropdownContainer/>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="Radio" id="Radio1"></input>
                <label className="form-check-label" for="Radio1">
                  AC
                </label>
                <div className="form-check">
                <input className="form-check-input" type="Radio" id="Radio2"></input>
                <label className="form-check-label" for="Radio2">
                 Non Ac
                </label>
              </div>
                </div>
                </div>
                <div className="col-6">
                
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
                        <div className="row" >
                        <div className="col-md-6" >
                        <MapContainer  />
                        </div>
                 
                          </div>

                          </div>
        );
    }
}
 
export default FormComponent;
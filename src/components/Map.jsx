import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

class MapContainer extends Component {
     state = {
          isVisible: true,
          bingmapKey:
            "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD", //Don't use this key in your environment.
          infoboxes: [
            {
              location: [13.0827, 80.2707],
              option: { title: "Chennai", description: "..." },
              addHandler: { type: "click", callback: this.callBackMethod }
            }
          ],
          pushPins: [
            // {
            //   location: [13.0827, 80.2707],
            //   option: { color: "red" },
            //   addHandler: { type: "click", callback: this.callBackMethod }
            // }
          ],
          regularPolygons: [
            {
              center: [13.0827, 80.2707],
              radius: 5,
              points: 36,
              option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 }
            }
          ],
          infoboxesWithPushPins: [
            {
              location: [13.0827, 80.2707],
              addHandler: "mouseover", //on mouseover the pushpin, infobox shown
              infoboxOption: { title: "Infobox Title", description: "Infobox" },
              pushPinOption: { title: "Pushpin Title", description: "Pushpin" },
              infoboxAddHandler: { type: "click", callback: this.callBackMethod },
              pushPinAddHandler: { type: "click", callback: this.callBackMethod }
            }
          ],
          boundary: {
            location: ["chennai"],
            option: {
              entityType: "PopulatedPlace"
            },
            polygonStyle: {
              fillColor: "rgba(161,224,255,0.4)",
              strokeColor: "#a495b2",
              strokeThickness: 2
            }
          },
          searchInput: "",
          getLocationHandledData: "",
          polyline: {
            location: [[13.0827, 80.2707], [13.0827, 80.1907]],
            option: {
              strokeColor: "blue",
              strokeThickness: 10,
              strokeDashArray: [1, 2, 5, 10]
            }
          },
          directions: {
            inputPanel: "inputPanel",
            renderOptions: { itineraryContainer: "itineraryContainer" },
            requestOptions: { routeMode: "driving", maxRoutes: 3 },
            wayPoints: [
              
    
            ]
          }
        };

 GetLocationHandled=(location)=> {
            // this.setState({
            //   getLocationHandledData: JSON.stringify(location)
            // });
            console.log(location)
            const pins= this.state.pushPins;
            console.log(pins)
            const newPin =[{
                'location':[location.latitude,location.longitude]
            }]
            const newPushPinCollection = [...this.state.pushPins,...newPin]
            this.setState({pushPins:newPushPinCollection})
            console.log(this.state.pushPins)

            // pushPins: [
            //     {
            //       location: [13.0827, 80.2707],
            //       option: { color: "red" },
            //       addHandler: { type: "click", callback: this.callBackMethod }
            //     }
            //  ]

          } 



handleButton=()=>{

    this.setState({directions:{            inputPanel: "inputPanel",
    renderOptions: { itineraryContainer: "itineraryContainer" },
    requestOptions: { routeMode: "driving", maxRoutes: 2 },
    wayPoints:this.state.pushPins
}
}) 
}
inputChangeHandler=(e)=>{
console.log(e.target.value)
}

GetAddressHandeled(Address){
    console.log(Address)
}
    render() { 
        return (

<div className="map-container">
    <input type="text" onChange={(e)=>this.inputChangeHandler(e)}/>
<ReactBingmaps
id="one"
bingmapKey={this.state.bingmapKey}
center={[13.0827, 80.2707]}
// directions={this.state.directions}
getLocation={{
    addHandler: "click",
    callback: this.GetLocationHandled.bind(this)
  }}

pushPins={this.state.pushPins}
directions={this.state.directions}
getAddress={{addHandler:"viewchangeend",
callback:this.GetAddressHandeled.bind(this)
}}
/>
<div className="direction-container">
                <div className="input-panel" id="inputPanel" />
                <div className="itinerary-container" id="itineraryContainer" />
              </div>
<span>{this.state.getLocationHandledData} </span>
    <button onClick={()=>{this.handleButton()}}>click</button>
</div>


        );
    }
}
 
export default MapContainer;



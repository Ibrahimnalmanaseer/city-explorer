import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

class Entry extends React.Component{



    getLocation=(event)=>{

        event.preventDefault();
        const cityName=event.target.city.value;
        this.props.getcity(cityName);
        
    }







    render(){ return (



      
             
        <form onSubmit={this.getLocation}>
        <label>City: </label>
          <input type="text" name="city" placeholder='Enter a city'/>
          <button type='submit'>Explore!</button>
        </form>

        /* <h3>Display name : {this.state.display_name}</h3>
        <p>Lon : {this.state.lon}</p>
        <p>Lat : {this.state.lat}</p>

        {this.state.mapFlag && <img src={https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}}></img>}
        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>} */

    

    )
    }

}

export default Entry;

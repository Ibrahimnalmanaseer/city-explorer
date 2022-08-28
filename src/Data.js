import React from "react";


class Data extends React.Component {
 
 
    constructor(props){

      super(props)

        this.state={

          lon:'',
          lan:''
        }

      
      }

      // getLocationDetails=()=>{
      //   const key='pk.c38cb90efb1f614a4d476396e3396b57';

      //   const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${this.props.location}&format=json`
      //   let request = axios.get(URL);

      //   this.setState({
      //     lat:request.date[0].lat,
      //     lan:request.date[0].lan

      //   })

      // }

    


     render(){
  
      return (

            <div>

            <p>longitude : {this.state.lon}</p>
        <p>latitude : {this.state.lat}</p>

        </div>

        );
  
  
  
   }
}
  
  export default Data;
// import React from "react";
// import axios from "axios";


// class Data extends React.Component {
 
 
//     constructor(props){

//       super(props)

//         this.state={

//           lon:'',
//           lan:''
//         }

      
//       }

//         getLocationDetails=async()=>{
//         const key='pk.c38cb90efb1f614a4d476396e3396b57';

//         const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${this.props.city}&format=json`
//         let request = await axios.get(URL);

//         this.setState({
//           lat:request.data[0].lat,
//           lan:request.data[0].lan

          

//         })

//       }

    


//      render(){
  
//       return (

//             <div>

//             <p>longitude : {this.state.lon}</p>
//             <p>latitude : {this.state.lat}  {console.log(this.state.lat)}</p>



//         </div>

//         );
  
  
  
//    }
// }
  
//   export default Data;
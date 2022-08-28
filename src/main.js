import React from "react";
import Entry from './form.js';

const Key='pk.c38cb90efb1f614a4d476396e3396b57'
const URL = https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json


class Main extends React.Component{



  constructor(props){

    super(props)

    this.state={

      city:'',
      latitude:'',
      longitude:''
    }
  }


   
  getCity=(cityname)=>{

    this.setState({
      city:cityname,

    })


  }
  render(){


      
      return(  <div>


           <Entry getcity={this.getCity} />
           <Data location={this.state.city} />
           

        </div>

      )

    }
}

export default Main;
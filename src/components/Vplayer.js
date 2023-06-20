import React, { Component } from 'react';


export default class Vplayer extends Component {
   

    
  constructor(props){
        super(props);
        this.state = {
          data: 'Sonia Pahuja'
        }
      }
      fetchData(){
        setTimeout(() => {
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello World!'
          })
        }, 1000)
      }
      componentDidMount(){
        this.fetchData();
      }
       
    render() {
      return (
        <div>
           {this.state.data}
        </div>
      );
    }
  }
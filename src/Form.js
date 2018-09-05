import React, { Component } from 'react';




class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      city:'',
      highTemp:'',
      lowTemp:'',
      description:'',
      icon:''


    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event) {

    //api call happens here

    let base = this

   fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=052f26926ae9784c2d677ca7bc5dec98')
     .then(function(response) {
       return response.json()
     }).then(function(json) {
       console.log('Parsed JSON', json)
       // update state
       base.setState({
         city: json.name,
         description: json.weather[0].description,
         highTemp: json.main.temp_max,
         lowTemp: json.main.temp_min,
         icon: json.weather[0].icon
       })
     }).catch(function(ex) {
       console.log('Parsing JSON failed', ex)
       alert('Err! ' + ex)
     })

   event.preventDefault()
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>



        <label>
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get my forecast" />
          <p> City:{this.state.city} </p>
          <p>Foreccast:{" "}{this.state.description}</p>
          <p>High:{this.state.highTemp}</p>
          <p>Low:{this.state.lowTemp}</p>
          <img src={'http://openweathermap.org/img/w/' + this.state.icon + '.png'}/>







      </form>
    );
  }
}


export default Form;

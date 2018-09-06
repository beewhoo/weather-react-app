import React, { Component } from 'react';




class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      city:'',
      highTemp:'',
      lowTemp:'',
      description:'',
      img:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',
      active:false


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

   fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&units=metric&appid=052f26926ae9784c2d677ca7bc5dec98')
     .then(function(response) {
       return response.json()
     }).then(function(json) {
       console.log('Parsed JSON', json)
       // update state
       base.setState({
         city: json.name,
         description: "Forecast:" + json.weather[0].description,
         highTemp: "High:" + json.main.temp_max + " " + '°C',
         lowTemp: "Low:" + json.main.temp_min +  " " + '°C',
         img: 'https://openweathermap.org/img/w/' + json.weather[0].icon + '.png'
       })
     }).catch(function(ex) {
       console.log('Parsing JSON failed', ex)
       alert('City not found - Search again!')
     })

   event.preventDefault()
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>



        <label>
          <input type="text" onChange={this.handleChange} />
        </label>

        <p><input className='button' type="submit" value="Get forecast" /></p>

          <p className='icon'><img src={this.state.img} alt='icon' width='100px'/></p>
          <p>{this.state.highTemp}</p>
          <p>{this.state.lowTemp}</p>
          <p>{this.state.description}</p>










      </form>
    );
  }
}


export default Form;

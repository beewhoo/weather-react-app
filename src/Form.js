import React, { Component } from 'react';




class Form extends Component {

  constructor(props){
    super(props)
    this.state = {

      city1:'',
      highTemp1:'',
      lowTemp1:'',
      description1:'',
      img1:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',

      city2:'',
      highTemp2:'',
      lowTemp2:'',
      description2:'',
      img2:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',

      city3:'',
      highTemp3:'',
      lowTemp3:'',
      description3:'',
      img3:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',



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

   fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&cnt=3&units=metric&appid=052f26926ae9784c2d677ca7bc5dec98')
     .then(function(response) {
       return response.json()
     }).then(function(json) {

       // update state
       base.setState({
         city1: json.city.name,
         description1: json.list[0].weather[0].description,
         highTemp1: json.list[0].temp.max + " " + '°C',
         lowTemp1: json.list[0].temp.min +  " " + '°C',
         img1: 'https://openweathermap.org/img/w/' + json.list[0].weather[0].icon + '.png',


         description2: json.list[1].weather[0].description,
         highTemp2: json.list[1].temp.max + " " + '°C',
         lowTemp2: json.list[1].temp.min +  " " + '°C',
         img2: 'https://openweathermap.org/img/w/' + json.list[1].weather[0].icon + '.png',


         description3: json.list[2].weather[0].description,
         highTemp3:  json.list[2].temp.max + " " + '°C',
         lowTemp3: json.list[2].temp.min +  " " + '°C',
         img3: 'https://openweathermap.org/img/w/' + json.list[2].weather[0].icon + '.png'






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


          <div className='forecast'>
            <img src={this.state.img1} alt='icon' width='100px'/>
            <p>{this.state.highTemp1}</p>
            <p>{this.state.lowTemp1}</p>
            <p>{this.state.description1}</p>
          </div>


          <div className='forecast'>
            <img src={this.state.img2} alt='icon' width='100px'/>
            <p>{this.state.highTemp2}</p>
            <p>{this.state.lowTemp2}</p>
            <p>{this.state.description2}</p>
          </div>

          <div className='forecast'>
            <img src={this.state.img3} alt='icon' width='100px'/>
            <p>{this.state.highTemp3}</p>
            <p>{this.state.lowTemp3}</p>
            <p>{this.state.description3}</p>
          </div>














      </form>
    );
  }
}


export default Form;

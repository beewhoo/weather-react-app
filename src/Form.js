import React, { Component } from 'react';




class Form extends Component {

  constructor(props){
    super(props)
    this.state = {



      highTemp1:'',
      lowTemp1:'',
      description1:'',
      img1:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',


      highTemp2:'',
      lowTemp2:'',
      description2:'',
      img2:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',



      highTemp3:'',
      lowTemp3:'',
      description3:'',
      img3:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',



      highTemp4:'',
      lowTemp4:'',
      description4:'',
      img4:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',



      highTemp5:'',
      lowTemp5:'',
      description5:'',
      img5:'https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif',




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

   fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&cnt=5&units=metric&appid=052f26926ae9784c2d677ca7bc5dec98')
     .then(function(response) {
       return response.json()
     }).then(function(json) {

       // update state
       base.setState({

         description1: json.list[0].weather[0].description,
         highTemp1: json.list[0].temp.max + ' ' + '°C',
         lowTemp1: json.list[0].temp.min +  ' ' + '°C',
         img1: 'https://openweathermap.org/img/w/' + json.list[0].weather[0].icon + '.png',


         description2: json.list[1].weather[0].description,
         highTemp2: json.list[1].temp.max + ' ' + '°C',
         lowTemp2: json.list[1].temp.min +  ' ' + '°C',
         img2: 'https://openweathermap.org/img/w/' + json.list[1].weather[0].icon + '.png',


         description3: json.list[2].weather[0].description,
         highTemp3:  json.list[2].temp.max + ' ' + '°C',
         lowTemp3: json.list[2].temp.min +  ' ' + '°C',
         img3: 'https://openweathermap.org/img/w/' + json.list[2].weather[0].icon + '.png',

         description4: json.list[3].weather[0].description,
         highTemp4:  json.list[3].temp.max + ' ' + '°C',
         lowTemp4: json.list[3].temp.min +  ' '+ '°C',
         img4: 'https://openweathermap.org/img/w/' + json.list[3].weather[0].icon + '.png',

         description5: json.list[4].weather[0].description,
         highTemp5:  json.list[4].temp.max + ' ' + '°C',
         lowTemp5: json.list[4].temp.min +  ' ' + '°C',
         img5: 'https://openweathermap.org/img/w/' + json.list[4].weather[0].icon + '.png'







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
          <input type="text" placeholder="search by city" onChange={this.handleChange} />
        </label>

        <p><input className='button' type="submit" value="Get forecast" /></p>


          <div className='forecast'>
            <img src={this.state.img1} alt='icon' width='100px'/>
            <p>{this.state.highTemp1}</p>
            <p>{this.state.lowTemp1}</p>
            <p>{this.state.description1.toUpperCase()}</p>
          </div>


          <div className='forecast'>
            <img src={this.state.img2} alt='icon' width='100px'/>
            <p>{this.state.highTemp2}</p>
            <p>{this.state.lowTemp2}</p>
            <p>{this.state.description2.toUpperCase()}</p>
          </div>

          <div className='forecast'>
            <img src={this.state.img3} alt='icon' width='100px'/>
            <p>{this.state.highTemp3}</p>
            <p>{this.state.lowTemp3}</p>
            <p>{this.state.description3.toUpperCase()}</p>
          </div>

          <div className='forecast'>
            <img src={this.state.img4} alt='icon' width='100px'/>
            <p>{this.state.highTemp4}</p>
            <p>{this.state.lowTemp4}</p>
            <p>{this.state.description4.toUpperCase()}</p>
          </div>

          <div className='forecast'>
            <img src={this.state.img5} alt='icon' width='100px'/>
            <p>{this.state.highTemp5}</p>
            <p>{this.state.lowTemp5}</p>
            <p>{this.state.description5.toUpperCase()}</p>
          </div>














      </form>
    );
  }
}


export default Form;

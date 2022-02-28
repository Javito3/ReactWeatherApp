import  React, { Component } from "react";
import Header from "./components/Header";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import { WEATHER_KEY } from "./keys";


class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        icon: '',
        error: null
    }

    getWeather = async (e) => { 
        e.preventDefault();
        const { city, country } = e.target.elements;

        const cityValue = city.value;
        const countryValue = country.value;

        try {
            if(cityValue && countryValue) {

            const API_Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&lang=es&appid=${WEATHER_KEY}&units=metric`

            const response = await fetch(API_Url);
            const data = await response.json();


            switch (data.weather[0].description) {
                case 'cielo claro':    
                    this.setState({icon: "fa fa-moon fa-2x"});
                    break;
                case 'nevada ligera':
                    this.setState({icon: "fa fa-snowflake fa-2x"});
                    break;
                case 'nubes':
                    this.setState({icon: "fa fa-cloud fa-2x"})
                    break;
                case 'nubes dispersas':
                    this.setState({icon: "fa fa-cloud fa-2x"})
                    break;
                default:
                    break;
            }
 
            
            this.setState({
                temperature: data.main.temp_min,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            })
            
            
           
        } else {
            this.setState({
                error: 'Porfavor, ingresa la ciudad y el país',
                temperature : ''
            })
        }
        } catch (error) {
            this.setState({error: "La ubicacion no existe"})
            
        }

        

        
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <Header />
                        <WeatherForm getWeather = { this.getWeather }/>
                        <WeatherInfo { ...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
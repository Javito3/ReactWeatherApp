import React from 'react';

const WeatherInfo = (props) => {

    return(

        <>
            {
                props.error &&
                <div className='alert alert-danger animate__animated animate__rubberBand mt-3'>
                    <p>{props.error}</p>
                </div>
            }

            {
                props.temperature ?
                <div className='card card-body animate__animated animate__rubberBand mt-3'>
                <p>
                    Ubicación: {props.city}, {props.country}
                </p>
                <p>
                    Temperatura: {props.temperature}°C, {props.description} <i className= {props.icon} aria-hidden="true" ></i>

                </p>
                <p>
                    Húmedad: {props.humidity}%
                </p>
                <p>
                    Velocidad del viento: {props.wind_speed} Km/h
                </p>
            </div>
            :
                <div className='alert alert-primary'>
                    <p>No hay datos aún</p>
                </div>
            }

            

        </>
        
    )

}

export default WeatherInfo;
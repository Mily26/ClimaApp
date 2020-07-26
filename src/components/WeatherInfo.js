import React from 'react';

const WeatherInfo = props => {

    console.log(props)

    return(

        <div>
            {
            props.error &&
            <div className="alert alert-danger">
            <p>{props.error}</p>
            </div>
            }
            
            {props.temperature ?
                
            <div className="card card-body">
                <p>
                <strong>Ubicación:</strong> {props.city}, {props.country}
                </p>
                 <p>
                <strong>Temperatura:</strong> {props.temperature}°C, {props.description}
                </p>
                 <p>
                <strong>Humedad:</strong> {props.humidity} %
                </p>
                <p>
                <strong>Viento:</strong> {props.windSpeed} km/h
                </p>
            </div>
            :
            <div className="card card-body">
                <p>No se han ingresado datos</p>
            </div>
        }
            

            
        </div>
       
        
    )

}


export default WeatherInfo;
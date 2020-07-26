import React from 'react';

const WeatherForm = props  => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Ingrese una ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Ingrese un país" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                ¿Cómo está el clima?
            </button>
        </form>
    </div>
);

export default WeatherForm;
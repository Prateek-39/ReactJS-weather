import React, { useState } from 'react';
import { useEffect } from 'react';
import "../Component/style.css";

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    const [coord, setCoord] = useState(null);
    const [ infom,setInfom] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b3ee718cd500d15c2a909dc96820891`
            const response = await fetch(url);
            const resJSON = await response.json();
            setCity(resJSON.main);
            setCoord(resJSON.coord);
            setInfom(resJSON.weather);
            
        };
        fetchAPI();
    }, [search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' value={search} onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (<>
                    <div className="info">
                        <h2 className="location">
                        {search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C || Max: {city.temp_max}°C</h3>
                        <h3 className="coord">Longitute :{coord.lon} || Latitude :{coord.lat}</h3>
                        <h3 className="coord">Weather: {infom[0].main}</h3>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>
                )}

            </div>
        </>
    )
}

export default Weather;
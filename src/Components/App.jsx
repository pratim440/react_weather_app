import React, { useEffect, useState } from 'react';
import Input from './Input';
import Card from './Card';
import axios from 'axios';
import Background from './Background';
const App = () => {
    const [icon, setIcon] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [temp, setTemp] = useState();
    const [minTemp, setMinTemp] = useState();
    const [maxTemp, setMaxTemp] = useState();
    const getData = async (val) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=ef38631b1bb45a62c45f109c04dc8fdc`)
            console.log(res.data.name);
            setIcon(res.data.weather[0].icon);
            setCity(res.data.name);
            setCountry(res.data.sys.country);
            setTemp(res.data.main.temp);
            setMinTemp(res.data.main.temp_min);
            setMaxTemp(res.data.main.temp_max);
        }
        catch(error) {
            alert("Invalid city name !");
        }
    }
useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=tinsukia&units=metric&appid=ef38631b1bb45a62c45f109c04dc8fdc`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data.name);
        setIcon(data.weather[0].icon);
        setCity(data.name);
        setCountry(data.sys.country);
        setTemp(data.main.temp);
        setMinTemp(data.main.temp_min);
        setMaxTemp(data.main.temp_max);
    })
    .catch(error => {
        console.log(error);
    });
},[]);
    return (<>
        <Background />
        <div id="overallContainer">
            <Input onSearch={getData} />
            <Card 
                img={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                cityName={city}
                countryName={country}
                temp={temp}
                min_temp={minTemp}
                max_temp={maxTemp}
            />
        </div>
        </>
    )
};

export default App;
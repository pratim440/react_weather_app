import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Card = (props) => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    return (
        <div id="cardContainer">
            <img id='icon' src={props.img} alt="img"/>
            <h1 id='city'><LocationOnIcon id='location' />{props.cityName}, {props.countryName}</h1>
            <h6 id='date'>{date} | {time}</h6>
            <h1 id='temp'>{props.temp} °C</h1>
            <div id="min_max">
                <h3>{props.min_temp} °C (min)</h3>
                <h3>|</h3>
                <h3>{props.max_temp} °C (max)</h3>
            </div>
        </div>
    )
};

export default Card;
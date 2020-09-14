import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    const {name, capital,population,flag, region} = props.countries;
    const flagStyle = { height:'50px'}
    const countryStyle ={
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Name: <Link to={`/name/${name}`}>Show of detail: {name}</Link></h2>
            <p>Capital: {capital}</p>
            <p>Population:{population}</p>
            <p><small>Region: {region}</small></p>
            <img  style={flagStyle} src={flag} alt=""/>

            
        </div>
    );
};

export default Countries;
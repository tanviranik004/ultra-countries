import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const CountriesDetail = () => {
    const {countryName}= useParams();
    const[countries,setCountries,] = useState({});
   // const {name, capital,population,flag, region} = props.countries;
    const flagStyle = { height:'50px'}
    const {flag,home}=countries;
    const history= useHistory();
    const handleClick =(home)=>{
        const url = `/home/${home}`;
        history.push(url);
    }
    const buttonStyle = {
        backgroundColor:'#4CAF50',
        border: '1px solid tomato',
        margin: '5px',
        display: 'inline-block',
        fontSize: '16px',
        borderRadius: '5px',
        paddingLeft: '20px'
    }
   
    
    useEffect(()=>{
         const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
         fetch(url)
        .then(res=>res.json())
        .then(data => setCountries(data[0]));
    }, [])
    return (
        <div>
            <p>This is Countries Detail Component: {countryName}</p>
            <p>CountryName: {countries.name}</p>
            <p>Capital: {countries.capital}</p>
            <p>Region: {countries.region}</p>
            <p>Population: {countries.population}</p>
            <p>Country Flag: </p>
            <img style={flagStyle} src={flag} alt=""/><br/>

            <button style={buttonStyle} onClick={()=>handleClick(home)}>back home</button>
            
            
             

        </div>
    );
};

export default CountriesDetail;
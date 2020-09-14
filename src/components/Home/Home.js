import React, { useState, useEffect } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {


const [countries, setCountries]= useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data =>setCountries(data))
  },[])
    return (
        <div>
            <h1>Countries:{countries.length}</h1>
      {
        countries.map(countries=><Countries countries={countries}></Countries>)
      }
            
        </div>
    );
};

export default Home;
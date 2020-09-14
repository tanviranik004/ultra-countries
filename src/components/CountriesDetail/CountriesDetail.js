import React from 'react';
import { useParams } from 'react-router-dom';

const CountriesDetail = () => {
    const {countriesName}= useParams();
    return (
        <div>
            <h3>This is Countries Detail Component:{countriesName}</h3>
        </div>
    );
};

export default CountriesDetail;
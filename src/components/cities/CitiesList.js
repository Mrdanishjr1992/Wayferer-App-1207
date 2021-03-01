import React from 'react';
import CitiesCard from './CitiesCard';

const CitiesList = (props) => {
	const cities = props.cities.map((citiesObj) => {
		return (
			<CitiesCard
				key={citiesObj._id}
				cities={citiesObj}
				showCityHandler={props.showCityHandler}
			/>
		);
	});

	return (
		<div id="city">
			<ul>{cities}</ul>
		</div>
	);
};

export default CitiesList;

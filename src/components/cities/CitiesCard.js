import { Link } from 'react-router-dom';

const CitiesCard = (props) => {
	const cityObj = {
		id: props.cities._id,
		name: props.cities.name,
		state: props.cities.state,
		country: props.cities.country,
		image: props.cities.image,
	};

	const displayCity = () => {
		return props.showCityHandler(cityObj);
	};

	return (
		<Link to={`/cities/${props.cities._id}`}>
			<div
				onClick={displayCity}
				key={props.cities._id}
				className="city-card bg-gray-300 border-black border-2 p-2 m-1 flex justify-between"
			>
				<img
					className="list-img pl-8"
					src={props.cities.image}
					alt={props.cities.name + ' Image'}
				/>
				<p className="text-2xl mr-6 m-2"> {props.cities.name}</p>
			</div>
		</Link>
	);
};

export default CitiesCard;

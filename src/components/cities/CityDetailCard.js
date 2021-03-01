const CityDetailCard = (props) => {
	return (
		<>
			<div className="city-detail bg-gray-300 mx-auto m-2">
				<div className="flex">
					<div className="container">
						<h1 className="text-2xl font-bold">{props.city.name}</h1><hr />
						<p>State: {props.city.state}</p>
						<p>Country: {props.city.country}</p>
					</div>
					<div className="container my-2 ml-20">
						<img id="show-img" src={props.city.image} alt="City_Image" />
					</div>
				</div>
			</div>
		</>
	);
};

export default CityDetailCard;

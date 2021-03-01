import React from 'react';
import CitiesList from '../components/cities/CitiesList';
import CityDetailPage from './CityDetailPage';

class CitiesPage extends React.Component {
	state = {
		isLoggedIn: this.props.isLoggedIn,
		cities: [],
		city: {
			id: '6034574546b6f1ba2688f8d7',
			name: 'San Francisco',
			state: 'CA',
			country: 'USA',
			image: 'https://i.imgur.com/Zq59o10.jpg',
		},
		posts: [],
	};

	componentDidMount() {
		fetch('https://wayfarer-api-1207.herokuapp.com/api/v1/cities')
			.then((res) => res.json())
			.then((jsonData) => {
				this.setState({
					...this.state,
					cities: jsonData,
				});
			})
			.catch((err) => {
				console.log('====================================');
				console.log(err);
				console.log('====================================');
			});
	}

	showCityHandler = (data) => {
		fetch(
			`https://wayfarer-api-1207.herokuapp.com/api/v1/posts/filter/${data.id}`
		)
			.then((res) => res.json())
			.then((jsonData) => {
				this.setState({
					city: data,
					posts: jsonData,
				});
			})
			.catch((err) => {
				console.log('====================================');
				console.log(err);
				console.log('====================================');
			});
	};

	handleDeletePost = (postId) => {
		console.log(postId);
		let confirmed = window.confirm(
			'Are you sure you want to delete this post?'
		);
		if (confirmed) {
			console.log('Fire away Sara Doe!');
			fetch(`https://wayfarer-api-1207.herokuapp.com/api/v1/posts/${postId}`, {
				method: 'DELETE',
			})
				.then((response) => {
					return response.json();
				})
				.then((jsonData) => {
					console.log(jsonData);
					const stateCopy = { ...this.state };
					const updatedPosts = stateCopy.posts.filter((post) => {
						return postId !== post._id;
					});
					this.setState({
						...this.state,
						posts: updatedPosts,
					});
				})
				.catch((err) => console.log(err));
		}
	};

	handleRerender = (cityId) => {
		fetch(
			`https://wayfarer-api-1207.herokuapp.com/api/v1/posts/filter/${cityId}`
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				console.log(jsonData);
				this.setState({
					...this.state,
					posts: jsonData,
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="flex h-full">
				<div className="w-full">
					<div className="p-3 border-black border-2 city-comp bg-gray-800">
						<h1 className="text-2xl text-white">Cities of the World</h1>
						<CitiesList
							cities={this.state.cities}
							showCityHandler={this.showCityHandler}
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="p-3 border-black border-2 city-comp bg-gray-700">
						<h1 className="text-2xl text-white mb-2">
							The City of {this.state.city.name}
						</h1>
						<CityDetailPage
							city={this.state.city}
							posts={this.state.posts}
							deletePost={this.handleDeletePost}
							handleRerender={this.handleRerender}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default CitiesPage;

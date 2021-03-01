import React from 'react';
import CityDetailCard from '../components/cities/CityDetailCard';
import NewPostComponent from '../components/postComponents/NewPostComponent';
import PostsList from '../components/postComponents/PostsList';

class CityDetailPage extends React.Component {
	state = {
		isOpen: false,
	};

	showModal = () => {
		const form = document.getElementById('post-form');
		if (!this.state.isOpen) {
			this.setState({
				isOpen: true,
			});
			form.style.display = 'block';
		} else {
			this.setState({
				isOpen: false,
			});
			form.style.display = 'none';
		}
	};

	render() {
		return (
			<div id="detail">
				<div id="detail-card">
					<CityDetailCard city={this.props.city} />
				</div>
				<div className="text-right my-4 mx-3">
					<button
						id="modal-button"
						onClick={this.showModal}
						className="btn bg-green-600 rounded border-1 border-black"
					>+</button>
				</div>
				<div id="post-feed">
					<div id="post" className="bg-gray-800 border-black border-2 rounded">
						<div className="text-white">Posts: {this.props.posts.length}</div>
						<PostsList
							posts={this.props.posts}
							deletePost={this.props.deletePost}
						/>
					</div>
				</div>
				<div id="post-form" className="bg-gray-700 text-gray-300">
					<NewPostComponent
						city={this.props.city}
						handleRerender={this.props.handleRerender}
					/>
				</div>
			</div>
		);
	}
}

export default CityDetailPage;

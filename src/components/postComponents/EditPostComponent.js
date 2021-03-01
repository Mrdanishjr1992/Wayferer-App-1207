import React from 'react';

class EditPost extends React.Component {
	state = {
		post: {
			title: '',
			body: '',
		},
	};

	componentDidMount() {
		fetch(
			`https://wayfarer-api-1207.herokuapp.com/api/v1/posts/${this.props.match.params.id}`
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				this.setState(jsonData);
			})
			.catch((err) => console.log(err));
	}

	handleEditPost = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmitPost = (event) => {
		event.preventDefault();
		fetch(
			`https://wayfarer-api-1207.herokuapp.com/api/v1/posts/${this.props.match.params.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(this.state),
			}
		)
			.then(() =>
				this.props.history.push(`/showpost/${this.props.match.params.id}`)
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmitPost}>
					<div>
						<label htmlFor="title">Title</label>
						<br />
						<input
							type="text"
							id="title"
							name="title"
							value={this.state.title}
							onChange={this.handleEditPost}
						/>
					</div>
					<div>
						<label htmlFor="body">Body</label>
						<br />
						<textarea
							type="text"
							id="body"
							name="body"
							value={this.state.body}
							onChange={this.handleEditPost}
						/>
					</div>
					<button type="submit" className="btn btn-primary hover:bg-green-500">
						Update Post
					</button>
				</form>
			</div>
		);
	}
}

export default EditPost;

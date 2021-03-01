import React from 'react';
import { Link } from 'react-router-dom';

const PostsCard = (props) => {
	const postDate = Date.parse(props.post.createdAt);
	const date = new Date(postDate);
	const formatDate = () => {
		if (isNaN(date)) {
			return `No post date.`;
		}
		if (date.getDay() < 2) {
			return `Posted ${date.getDay()} day ago.`;
		} else {
			return `Posted ${date.getDay()} days ago.`;
		}
	};
	return (
		<>
			<div className="post-card bg-gray-300 border-black border-2 p-2 m-1.5 flex flex-col">
				<Link to={`/showpost/${props.post._id}`}>
					<h1 className="text-xl"> {props.post.title}</h1>
					<p className="text-sm"> {props.post.body}</p>
				</Link>
				<div className="flex justify-between px-5 py-3">
					<button
						className="btn btn-danger hover:bg-green-600"
						onClick={() => props.deletePost(props.post._id)}
					>
						Delete
					</button>
					<div className="py-2">
						<p>{formatDate()}</p>
					</div>
					<Link to={`/editpost/${props.post._id}`}>
						<button className="btn bg-gray-700 text-gray-300 hover:bg-green-600">
							Edit Post
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PostsCard;

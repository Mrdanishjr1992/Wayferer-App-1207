import CommentCard from './CommentCard';

const CommentsList = (props) => {
	const filteredList = [];
	const commentLength = props.comments.length;
	if (!commentLength) {
		return (
			<div id="comment-list" className="bg-gray-800">
				<p className="text-white mt-4">Comments: {commentLength}</p>
				<p className="text-white mt-4">No Comments ..</p>
			</div>
		);
	} else {
		props.comments.map((comment) => {
			return filteredList.unshift(
				<CommentCard
					key={comment._id}
					comment={comment}
					handleDelete={props.handleDelete}
				/>
			);
		});
		return (
			<section id="comment-list" className="bg-gray-800 p-3">
				<p className="text-white mt-4">Comments: {commentLength}</p>
				{filteredList}
			</section>
		);
	}
};

export default CommentsList;

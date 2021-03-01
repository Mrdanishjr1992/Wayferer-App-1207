const CommentCard = (props) => {
	return (
		<div className="flex justify-between bg-gray-400 border-gray-100 border-2 m-2">
			<p className="float-left m-2 p-2" key={props.comment._id}>
				{props.comment.body}
			</p>
			<button
				className="btn btn-danger float-right m-2"
				onClick={() => props.handleDelete(props.comment._id)}
			>
				Delete
			</button>
		</div>
	);
};
export default CommentCard;

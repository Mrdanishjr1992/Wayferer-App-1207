import React from 'react';
import PostsCard from './PostsCard';

const PostsList = (props) => {
	const filteredPosts = [];
	props.posts.map((postsObj) => {
		return filteredPosts.unshift(
			<PostsCard
				key={postsObj._id}
				post={postsObj}
				deletePost={props.deletePost}
			/>
		);
	});

	return <ul>{filteredPosts}</ul>;
};

export default PostsList;

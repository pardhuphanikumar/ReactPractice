import React, { Component } from 'react'
import axios from 'axios'
interface Props { }
interface Post {
	id: number,
	title: string
}
interface State {
	posts: Post[],
	errorMsg: string
}
class PostList extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			posts: [],
			errorMsg: ''
		}
	}
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
				console.log(error)
				this.setState({ errorMsg: 'Error retrieving data' })
			})
	}
	render() {
		const { posts, errorMsg } = this.state
		console.log(posts);
		return (
			<div>
				List of posts
				{posts.length
					? posts.map(post => <div key={post.id}>{post.title}</div>)
					: null}
				{errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}
export default PostList;

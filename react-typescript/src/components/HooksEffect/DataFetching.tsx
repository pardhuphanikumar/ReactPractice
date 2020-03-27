import React, { useState, useEffect } from 'react'
import axios from 'axios'
interface Post {
	title: string
}
function DataFetching() {
	const [post, setPost] = useState<Post>({ title: "" })
	const [id, setId] = useState<number>(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				console.log(res)
				setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])
	const handleClick = () => {
		setIdFromButtonClick(id)
	}
	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value as unknown as number)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}
export default DataFetching

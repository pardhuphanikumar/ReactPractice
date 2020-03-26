import React, { Component, FormEvent } from 'react'
import axios from 'axios'
interface Props { }
interface State {
	userId: string,
	title: string,
	body: string,
	[x: string]: string | boolean;
}
class PostForm extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}
	changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}
	submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
	render() {
		const { userId, title, body } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default PostForm

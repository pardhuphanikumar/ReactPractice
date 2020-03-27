import React, { Component } from 'react'
interface Props { }
interface State {
	count: number,
	name: string
}
class ClassCounterOne extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}
	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`
		console.log('yes');
	}
	componentDidUpdate(prevProps: Props, prevState: State) {
		console.log('before if')
		if (prevState.count !== this.state.count) {
			console.log('after if')
			console.log('Updating document title')
			document.title = `Clicked ${this.state.count} times`
		}
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		)
	}
}
export default ClassCounterOne

import React, { Component } from 'react'
interface Props { }
interface State {
	x: any,
	y: any
}
class ClassMouse extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			x: 0,
			y: 0
		}
	}
	logMousePosition = (e: { clientX: any; clientY: any }) => {
		console.log('lmp');
		this.setState({ x: e.clientX, y: e.clientY })
	}
	componentDidMount() {
		console.log('cdm');//only once it is loaded 
		window.addEventListener('mousemove', this.logMousePosition)
	}
	componentWillUnmount() {
		console.log('cwu');
		window.removeEventListener('mousemove', this.logMousePosition)
	}
	render() {
		const { x } = this.state;
		const { y } = this.state;
		return (
			<div>
				X - {x} Y - {y}
			</div>
		)
	}
}
export default ClassMouse

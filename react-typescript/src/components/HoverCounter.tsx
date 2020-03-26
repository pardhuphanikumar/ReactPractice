import React, { Component } from 'react'
import withCounter from './withCounter'
interface Props {
	name: string
	count: number,
	incrementCount: () => any
}
interface State { }
class HoverCounter extends Component<Props, State> {
	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}
export default withCounter(HoverCounter, 10)

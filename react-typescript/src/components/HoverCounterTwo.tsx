import React, { Component } from 'react'
interface Props {
	count: number,
	incrementCount: () => any,
	name: string
}
class HoverCounterTwo extends Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}
export default HoverCounterTwo

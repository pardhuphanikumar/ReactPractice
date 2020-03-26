import React from 'react'
const withCounter = (WrappedComponent: any, incrementNumber: number) => {
	interface Props {
		name: string
	}
	interface State {
		count: number
	}
	class WithCounter extends React.Component<Props, State> {
		constructor(props: Props) {
			super(props)
			this.state = {
				count: 0
			}
		}
		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
		render() {
			console.log('HOC', this.props.name)
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					{...this.props.name}
				/>
			)
		}
	}
	return WithCounter
}
export default withCounter

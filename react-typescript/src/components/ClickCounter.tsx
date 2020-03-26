import React, { Component } from 'react'
import withCounter from './withCounter'
interface Props {
  name: string
  count: number,
  incrementCount: () => any
}
interface State { }
class ClickCounter extends Component<Props, State> {
  render() {
    console.log(this.props);
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
  }
}
export default withCounter(ClickCounter, 5)

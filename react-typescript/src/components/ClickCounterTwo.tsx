import React, { Component } from 'react'
interface Props {
  count: number,
  incrementCount: () => any,
  name: string
}
class ClickCounterTwo extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}>{this.props.name} abcClicked {count} times</button>
  }
}
export default ClickCounterTwo

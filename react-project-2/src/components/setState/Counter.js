import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countNew: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state)
        })
    }
    increment1 = () => {
        this.setState({
            countNew: this.state.countNew + 1
        }, () => {
            console.log(this.state)
        })
    }
    render() {
        return (
            <div className="boxed">
                count - {this.state.count}
                count new - {this.state.count}
                <button onClick={() => this.increment()}>click to increment</button>
                <button onClick={() => this.increment1()}>click to increment</button>
            </div>
        )
    }
}

export default Counter

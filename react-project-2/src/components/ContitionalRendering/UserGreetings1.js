import React, { Component } from 'react'

class UserGreetings1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogginIn: true // based on true or false welocme message displayed
        }
    }
    render() {
        let message;
        if (this.state.isLogginIn) {
            message = <div > Welcome React(approch2)</div>
        } else {
            message = <div > Welcome Guest(approch2)</div>
        }
        return (
            <div className="boxed" >
                {message}
            </div>
        )
    }
}
export default UserGreetings1

import React, { Component } from 'react'

class UserGreetings2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogginIn: true // based on true or false welocme message displayed
        }
    }
    render() {
        //approch 3
        // return this.state.isLogginIn ? (
        //     <div className="boxed" > Welcome React(approch3)</div>
        // ) : (
        //         <div className="boxed" > Welcome Guest(approch3)</div>
        //     )

        //approch 4
        return this.state.isLogginIn && <div className="boxed" > Welcome React(approch4)</div>

    }
}

export default UserGreetings2

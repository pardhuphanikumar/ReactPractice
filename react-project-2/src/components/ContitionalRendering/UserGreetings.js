import React, { Component } from 'react'
//approch 1
class UserGreetings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogginIn: true // based on true or false welocme message displayed
        }

    }
    render() {
        // return (
        //     <div className="boxed">
        //         <div>Welcome React</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
        if (this.state.isLogginIn) {
            return (
                <div className="boxed">
                    Welcome React(approch1)
                </div>
            )
        } else {
            return (
                <div className="boxed">
                    Welcome Guest(approch1)
                </div>
            )
        }
    }
}

export default UserGreetings

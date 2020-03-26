import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById('portal-root') as Element
    )
    // rseturn <h1> Hello Portal </h1>
}

export default PortalDemo

import React, { useState } from 'react'
// import HookMouse from './HookMouse'
import IntervalClassCounter from './IntervalClassCounter'
function MouseContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{/* {display && <HookMouse />} */}
			{display && <IntervalClassCounter />}
		</div>
	)
}
export default MouseContainer

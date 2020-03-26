import React, { useState } from 'react'
function HookCounter() {
  const [count, setCountMethod] = useState<number>(0)
  return (
    <div>
      <button onClick={() => setCountMethod(count + 1)}>Count {count}</button>
    </div>
  )
}
export default HookCounter

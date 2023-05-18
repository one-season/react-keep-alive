import React, { memo, useState } from 'react'

const About = memo(() => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>About</h2>

      <h3>
        count default is zero
        <span>：{count}</span>
      </h3>

      <button onClick={() => setCount(count + 1)}>
        count++
      </button>
    </div>
  )
})

export default About
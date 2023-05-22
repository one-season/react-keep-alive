import React, { memo } from 'react';


const olStyle = {
  height: '300px',
  overflowY: 'auto'
}

const List = memo(() => {
  const initialList = Array.from(Array(50).keys());
  
  return (
    <ol style={olStyle}>
      {
        initialList.map(item => (
          <li key={item}>
            文本内容{item}
          </li>
        ))
      }
    </ol>
  )
})

export default List
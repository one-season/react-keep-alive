import React, { memo, useState } from 'react'

const Profile = memo(() => {
  const [list, setList] = useState([]);
  
  return (
    <div>
      <h2>Profile</h2>

      <ol>
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            )
          })
        }
      </ol>

      <input 
        type="text" 
        placeholder='what needs to be done?'
        onKeyUp={e => {
          if (e.target.value && e.keyCode === 13) {
            const newList = [...list];
            newList.push(e.target.value);
            setList(newList);
            e.target.value = '';
          };
        }}
      />
    </div>
  )
})

export default Profile
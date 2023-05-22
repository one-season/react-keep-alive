import React, { memo } from 'react';

import * as actionTypes from "../keep-alive/store/constants";

const Home = memo((props) => {
  const { dispatch } = props;

  function handleRefresh(name) {
    dispatch({
      type: actionTypes.DESTROY,
      payload: {
        keepAliveId: name
      }
    })
  };

  return (
    <div>
      <h2>Home</h2>

      <button onClick={() => handleRefresh('list')}>refresh List</button>
      <hr />
      <button onClick={() => handleRefresh('profile')}>refresh Profile</button>
      <hr />
      <button onClick={() => handleRefresh('about')}>refresh About</button>
    </div>
  )
})

export default Home
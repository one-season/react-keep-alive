import React, { memo, useContext } from 'react';

import { KeepAContext } from "../keep-alive/KeepAContext";
import * as actionTypes from "../keep-alive/store/constants";

const Home = memo(() => {
  const { keepAliveStates, dispatch } = useContext(KeepAContext);

  function handleRefresh(name) {
    if (!keepAliveStates[name]) return;

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
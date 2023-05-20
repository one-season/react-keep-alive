import React, { memo, useReducer, createContext, useCallback } from 'react';

import { KeepAContext } from "./KeepAContext";

import reducer from "./store/reducer";
import * as actionTypes from "./store/constants.js";

const KeepAlive = memo((props) => {
  /**
   * {
   *    home: {
   *      keepAliveId：组件key,
   *      reactElement：首次渲染,
   *      nodes：真是DOM节点,
   *      status: creating | created
   *    },
   *    ...
   * }
   */
  const [keepAliveStates, dispatch] = useReducer(reducer, {});

  /**
   * 提供给子组件设置组件状态的方法
   */
  const setKeepAStates = useCallback(({ reactElement, keepAliveId }) => {
    if (!keepAliveStates[keepAliveId]) {
      dispatch({
        type: actionTypes.CREATING,
        payload: {
          reactElement,
          keepAliveId
        }
      })
    }
  }, [keepAliveStates])
  
  return (
    <KeepAContext.Provider 
      value={{ 
        keepAliveStates,
        setKeepAStates
      }}
    >
      { props.children }
      
      {
        Object.values(keepAliveStates).map(({ keepAliveId, reactElement }) => {
          return (
            /**
             * 这个div渲染完成后，就能拿到当前标签node和渲染的childNodes
             * 然后去更新nodes，接着在KATrans组件里渲染nodes；
             */
            <div
              className='get_nodes' 
              ref={node => {
                if (node && !keepAliveStates[keepAliveId].nodes) {
                  dispatch({
                    type: actionTypes.CREATED,
                    payload: {
                      keepAliveId,
                      nodes: [...node.childNodes]
                    }
                  })
                }
              }}
              key={keepAliveId}
            >
              { reactElement }
            </div>
          )
        })
      }
    </KeepAContext.Provider>
  )
})

export default KeepAlive
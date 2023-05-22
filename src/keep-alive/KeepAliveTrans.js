import React, { useContext, useEffect, useRef } from 'react'

import { KeepAContext } from "./KeepAContext";

const KeepAliveTrans = (ReactElement, { keepAliveId, saveScroll }) => {

  function EnhanceComponent(props) {
    const _ref = useRef(null);
    const { keepAliveStates, setKeepAStates, handleScroll } = useContext(KeepAContext);

    useEffect(() => {
      const state = keepAliveStates[keepAliveId];

      if (state?.nodes) {
        state.nodes.forEach(node => _ref.current.appendChild(node));

        if (saveScroll) {
          state.nodes.forEach(node => {
            if (state.scrolls[node]) {
              node.scrollTop = state.scrolls[node]
            }
          })
        }
      } else {
        setKeepAStates({
          reactElement: <ReactElement { ...props } />,
          keepAliveId
        })
      }
    }, [keepAliveStates, setKeepAStates, props]);

    useEffect(() => {
      if (saveScroll) {
        /**
         * 因为组件是渲染到这个组件下的，所以监听捕获阶段；
         * 事件委托
         */
        _ref.current.addEventListener('scroll', event => handleScroll(keepAliveId, event), true)
      }
    }, [handleScroll])
    
    return (
      <div className={`render_${keepAliveId}_nodes`} ref={ _ref}></div>
    )
  };
  EnhanceComponent.displayName = keepAliveId;

  return EnhanceComponent;
}

export default KeepAliveTrans

import React, { useContext, useEffect, useRef } from 'react'

import { KeepAContext } from "./KeepAContext";

const KeepAliveTrans = (ReactElement, keepAliveId) => {

  function EnhanceComponent(props) {
    const _ref = useRef(null);
    const { keepAliveStates, setKeepAStates } = useContext(KeepAContext);

    useEffect(() => {
      const state = keepAliveStates[keepAliveId];

      if (state?.nodes) {
        state.nodes.forEach(node => _ref.current.appendChild(node))
      } else {
        setKeepAStates({
          reactElement: <ReactElement { ...props } />,
          keepAliveId
        })
      }
    }, [keepAliveStates, setKeepAStates, props]);
    
    return (
      <div className="render_nodes" ref={ _ref}></div>
    )
  };
  EnhanceComponent.displayName = keepAliveId;

  return EnhanceComponent;
}

export default KeepAliveTrans

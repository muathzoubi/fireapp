import React, { useEffect } from 'react';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,     0.94)',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      <div className="cube">
        <div className="cube_item cube_x"></div>
        <div className="cube_item cube_y"></div>
        <div className="cube_item cube_y"></div>
        <div className="cube_item cube_x"></div>
      </div>
    </div>
  );
};
export default Loader;
export const SecoundryLoader=(props:{show:boolean,setShow:any})=>{
  useEffect(()=>{
setTimeout(()=>props.setShow(false),2500)
  },[])
  return(
   <div
   style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.show?'rgba(255, 255, 255,     0.94)':'',
    zIndex: 9999,
    overflow: 'hidden',
  }}> <div style={{display:props.show?'block':'none',position:'fixed',left:'45%',right:'45%',top:'50%'}} className='sec-loader'></div>
  </div>
  )
}
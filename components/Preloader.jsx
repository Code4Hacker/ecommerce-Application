import React from 'react'
import jQuery from "jquery";
const Preloader = () => {
    setTimeout(() => {
        jQuery(".pre-loader").fadeOut({duration:1000,easing:'linear'});
  }, 3000);
  return (
    <div style={{
        position:"fixed",
        top:"0px",
        width:"100%",
        height:"100%",
        left:"0px",
        zIndex:"6",
        backdropFilter:"blur(40px)"
    }} className="pre-loader">
        <div className="pre-loader-bar">
            <div className="title gradient" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}>
                <h1 style={{color:"transparent",fontWeight:900,textAlign:"center",background:"linear-gradient(90deg,red,purple)",backgroundClip:"text",WebkitBackgroundClip:"text"}}>ECOMMERCE</h1>
            </div>
        </div>
    </div>
  )
}

export default Preloader
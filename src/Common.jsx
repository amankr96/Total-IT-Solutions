import React from 'react';
import {NavLink} from 'react-router-dom';

const Common=(props)=>{
    return (
        <React.Fragment>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
             <h1>{props.name} <strong className="brand-name"><br></br>Total IT Solutions</strong></h1>
             <h2 className="my-3">
             {props.motive}
             </h2>
             <div className="mt-3">
             <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
             </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={props.imgsrc} 
            className="animated" alt="common img" width="400" height="300"/>
            </div>
            </div>
            </div>
        </div>
    </div>
        </section>
        </React.Fragment>
    )
}

export default Common;
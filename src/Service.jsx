import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Service=()=>{
    return (
        <React.Fragment>
        <div className="my-5">
        <h1 className="text-center" style={{color:'#ff9933'}}><b>What we have for you ??</b></h1>
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row  gy-4">
            {
                Sdata.map((val, ind)=>{
                    return <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    msg={val.msg}
                    />
                })
            }
            </div>
            </div>
        </div>
    </div>
        </React.Fragment>
    );
};

export default Service;
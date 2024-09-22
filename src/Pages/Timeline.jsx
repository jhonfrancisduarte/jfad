import React from 'react';
import './Timeline.css';

// import images
import hrislogo from '../assets/images/hrislogo.png';
import pmticon from '../assets/images/pmticon.png';
import aporeef from '../assets/images/aporeef.png';
import yviplogo from '../assets/images/yviplogo.png';
import plpsite from '../assets/images/plpsite.png';
import workaid from '../assets/images/workaid.png';

const Timeline = () => {

    return (

        <div className='main'>
            <p className='timeline-title'>Projects</p>
            <p className='timeline-desc'>These are some of the projects I've been a part of.</p>
            <div className='timeline'>


                {/* HTML Card*/}

                <div className='container left-container'>

                    <img src={hrislogo} alt='NYC - HRIS' />

                    <div className='text-box htmlcard' onClick={() => window.open('https://lightslategrey-gull-153351.hostingersite.com/', '_blank')}>

                        <h4 className='exp-title'> NYC - HRIS </h4>
                        <span className='companyName'>National Youth Commision</span>
                        <span className='left-container-arrow htmlarrow'></span>

                    </div>

                </div>


                {/*  JavaScript Card*/}

                <div className='container right-container'>

                    <img src={pmticon} alt='PMT' />

                    <div className='text-box javascriptcard' onClick={() => window.open('https://motorcycletourism.tpb.gov.ph/', '_blank')}>

                        <h4 className='exp-title'>Philippine Motorcycle Tourism</h4>
                        <span className='companyName'>Tourism Promotion Board - PTM</span>
                        <span className='right-container-arrow javascriptarrow'></span>

                    </div>

                </div>


                {/*  React Js Card*/}

                <div className='container left-container'>

                    <img src={aporeef} alt='Apo Reef' />

                    <div className='text-box reactjscard' onClick={() => window.open('https://aporeefnaturalpark.com/', '_blank')}>

                        <h4 className='exp-title'>Apo Reef Natural Park</h4>
                        <span className='companyName'>DENR - Apo Reef Natural Park</span>
                        <span className='left-container-arrow reactjsarrow'></span>

                    </div>

                </div>


                {/*  Node JS Card*/}

                <div className='container right-container'>

                    <img src={yviplogo} alt='YVIP' />

                    <div className='text-box nodejscard' onClick={() => window.open('https://nyc-yvip.com/', '_blank')}>

                        <h4 className='exp-title'>The NYC - YVIP</h4>
                        <span className='companyName'>National Youth Commision</span>
                        <span className='right-container-arrow nodejsarrow'></span>

                    </div>

                </div>


                {/*  Express Js Card*/}

                <div className='container left-container'>

                    <img src={plpsite} alt='PLP' />

                    <div className='text-box expressjscard' onClick={() => window.open('https://plpasig.edu.ph/', '_blank')}>

                        <h4 className='exp-title'>Pamantasan ng Lungsod ng Pasig</h4>
                        <span className='companyName'>PLP Pasig</span>
                        <span className='left-container-arrow expressjsarrow'></span>

                    </div>

                </div>


                {/*  MongoDB Card*/}

                <div className='container right-container'>

                    <img src={workaid} alt='Workaid' />

                    <div className='text-box mongodbcard' onClick={() => window.open('https://workaid.io/', '_blank')}>

                        <h4 className='exp-title'>Workaid</h4>
                        <span className='companyName'>Workaid.io</span>
                        <span className='right-container-arrow mongodbarrow'></span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Timeline;

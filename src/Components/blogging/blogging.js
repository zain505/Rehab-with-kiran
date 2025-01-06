import React from 'react';
import "./blogging.css";
import FootAnkle from "../../media/foot_ankle.jpg"
import BackBone from "../../media/back-bone.jpg"
import Posture from "../../media/posture.jpg"


function blogging() {
    return (
        <>
            <div className='bloggin-wrapper'>
                <div className='blogging-header'>
                    <p>stay informed</p>
                </div>
                <div className='blogs'>
                    <div className='small-card'>
                        <div className='blog-img-overlay'>
                            <div className='upper-sec'>
                                <div className='latest-wrapper'>
                                    <p>News</p>
                                </div>
                            </div>
                            <div className='lower-sec'>
                                <p>Free Camp on Monday</p>
                                <div className='date-and-read-more'>
                                    <p>02-10-2025</p>
                                    <p style={{cursor:"pointer"}}>Read More</p>
                                </div>
                            </div>
                        </div>
                        <img src={FootAnkle} className='blog-img' alt='FootAnkle' height={"100%"} width={"100%"} />
                    </div>
                    <div className='big-card'>
                        <div className='blog-img-overlay'>
                            <div className='upper-sec'>
                                <div className='latest-wrapper'>
                                    <p>Blog</p>
                                </div>
                            </div>
                            <div className='lower-sec'>
                                <p>Posture and pain relief tips for desk workers and gamers</p>
                                <div className='date-and-read-more'>
                                    <p>02-10-2025</p>
                                    <p style={{cursor:"pointer"}}>Read More</p>
                                </div>
                            </div>
                        </div>
                        <img src={Posture} className='blog-img' alt='FootAnkle' height={"100%"} width={"100%"} />
                    </div>
                    <div className='small-card'>
                        <div className='blog-img-overlay'>
                            <div className='upper-sec'>
                                <div className='latest-wrapper'>
                                    <p>Research</p>
                                </div>
                            </div>
                            <div className='lower-sec'>
                                <p>Lower Back Pain | Neurological Surgery</p>
                                <div className='date-and-read-more'>
                                    <p>02-10-2025</p>
                                    <p style={{cursor:"pointer"}}>Read More</p>
                                </div>
                            </div>
                        </div>
                        <img src={BackBone} className='blog-img' alt='FootAnkle' height={"100%"} width={"100%"} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default blogging;
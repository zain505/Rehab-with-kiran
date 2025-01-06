import React from 'react';
import "./YoutubeChannel.css";
import WatchTv from "../../media/watch-tv.png"
import ExternalLink from "../../media/external.png"
import ReactPlayer from 'react-player'

function YoutubeChannel() {
    return (
        <>
            <div className='yt-section-outer'>
                <div className='content-text'>
                    <div className='text-section'>
                        {/* <p><span>Watch and listen latest podcast</span> Dr. Kiran Fatima</p> */}
                        <p><span>Watch and listen latest videos</span></p>
                        <div className='watchtv-section'>
                            <img src={WatchTv} width={"100%"} height={"100%"} />
                        </div>
                        <p>Dr. Kiran Fatima 
                            <img title='Youtube Channle - Dr. Kiran PT' onClick={()=>{
                                window.open("https://www.youtube.com/@kiranPT237","_blank")
                            }} style={{marginLeft:"10px",cursor:"pointer"}} src={ExternalLink} height={20} width={20} />
                        </p>
                    </div>
                </div>
                <div className='content-media'>
                    <ReactPlayer url='https://youtu.be/mYxcmNs3HOA?si=D22CjRJMoKRIrx-O' width={"100%"} height={"100%"} />
                </div>

            </div>

        </>
    )
}

export default YoutubeChannel;
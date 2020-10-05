import React from 'react';
import bgVideo from './../assets/video.mp4';

const Background = () => {
    return(
        <video autoPlay muted loop id='myVideo'>
            <source src={bgVideo} type='video/mp4' />
        </video>
    )
};

export default Background;
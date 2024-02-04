import React from 'react';
const VideoComponent = () => {
    return (
        <div>
            <video width="100%" height="auto" controls autoPlay>
                <source src="./assets/farmhands.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}
export default VideoComponent;
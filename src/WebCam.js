import React from "react";
import Webcam from "react-webcam";
import { Button } from "react-daisyui";


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

function WebCam({onCapture}) {
    return (
        <div className="w-full h-full mt-5">
            <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            >
                {({ getScreenshot }) => (

                    <Button className="mt-5 w-72 mx-auto" variant="secondary" onClick={() => {
                        const imageSrc = getScreenshot()
                        console.log(imageSrc)
                        onCapture(imageSrc)
                    }}>
                        Take a photo and proceed
                    </Button>
                )}
            </Webcam>
        </div>
    )
}
export default WebCam
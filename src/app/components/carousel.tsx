'use client';
import React from "react";
import Video from "../interfaces/Image.i";

export default function Carousel({video}: Video) {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const previousSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // }

    // const nextSlide = () => {
    //     setCurrentIndex((nextIndex) => (nextIndex === images.length - 1 ? 0 : nextIndex + 1));
    // }


    return (
        <div className="m-auto px-4 relative group mb-12">
            {/* <div className="w-full h-full shadow-xl rounded-xl bg-center bg-cover duration-500">
                <ReactPlayer
                    url={images[currentIndex].img}
                    light={true}
                    controls={true}
                    width="300px"
                    height="300px"
                />
            </div> */}
            <video className="w-full 2xsm:h-[120px] xsm:h-[120px] sm:h-[200px] md:h-[450px] shadow-xl rounded-xl bg-center bg-cover duration-500" controls>
                <source src={video} type="video/mp4"/>
            </video>
            {/* Seta para esquerda */}
            {/* <div onClick={() => previousSlide()} className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 trasnlate-y-[-50%] left-5 rounded-full p-2 bg-black/20 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </div> */}

            {/* Seta para direita */}
            {/* <div onClick={() => nextSlide()} className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 trasnlate-y-[-50%] right-5 rounded-full p-2 bg-black/20 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div> */}
        </div>
    );
}
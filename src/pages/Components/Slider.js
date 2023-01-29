import React from 'react'
import { Slide } from 'react-slideshow-image'
import Cards from './Cards'

const slideImages = [
    <img src={Cards.src} />
]

const properties = {
    indicators: true,
    arrows: true,
    onchange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
const SlideShow = () => {
    return (
        <>
            <div className='slideContainer'>
                <Slide {...properties}>
                    <div className='each-slide'>
                        <div style={{ backgroundImage: { slideImages } }}></div>
                    </div>
                    <div className='each-slide'>
                        <div style={{ backgroundImage: { slideImages } }}></div>
                    </div>
                    <div className='each-slide'>
                        <div style={{ backgroundImage: { slideImages } }}></div>
                    </div>
                </Slide>
            </div>
        </>
    )
}
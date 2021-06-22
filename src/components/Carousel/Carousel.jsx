import React, { useState } from 'react';
import './Carousel.css';
import FlashCard from '../FlashCard/FlashCard';
import { Card } from 'semantic-ui-react';

export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

export default function Carousel({ children }) {

    return (
        <div className='carousel'>
            <div className='inner' style={{ transform: 'translateX(-0%)' }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%'});
                })}
                {/* <div className='carousel-item' >
                    {cards.map((card) => {
                        return (
                            <FlashCard 
                                card={card}
                                key={card._id}
                                style={{ width: '100%' }}
                            />
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}

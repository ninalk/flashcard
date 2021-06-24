import React, { useState } from 'react';
import './Carousel.css';
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

export default function Carousel({ children, removeCard, updateCard }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });
    
    return (
        <div {...handlers} className='carousel'>
            <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </div>
            <div className='indicators'>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                    className='chevron-left'
                >
                </button>
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                    className='chevron-right'
                >
                </button>
            </div>
        </div>
    )
}

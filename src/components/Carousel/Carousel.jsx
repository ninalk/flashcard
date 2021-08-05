import React, { useState } from 'react';
import './Carousel.css';
import ShuffleButton from '../../components/ShuffleButton/ShuffleButton';
import { useSwipeable } from 'react-swipeable';

// CarouselItem renders the item itself
export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

// Carousel is the main controller to control items
export default function Carousel({ children, removeCard, updateCard, shuffleCards, cards }) {
    const [activeIndex, setActiveIndex] = useState(0);

    //  method to update new active index
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    // use react-swipeable package to swipe on mobile devices
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });
    
    return (
        <div {...handlers} className='carousel'>
            {/* use transform: translateX(-100%) to make 1 active item visible at 100% width */}
            <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {/* Iterate through all children and adjust width property to show only 1 item */}
                {/* cloneElement results in the element having the original elements props, key, and ref */}
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
                <ShuffleButton shuffleCards={shuffleCards} cards={cards} />
            </div>
        </div>
    )
}

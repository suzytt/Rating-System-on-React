import React, { useState } from 'react';
import s from './Rating.module.css'

const Rating = ({ currentRating, onVote }) => {

    const [hover, setHover] = useState(0)

    return (
        <div className={s.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`${s.star} ${star <= (hover || currentRating) ? s.filled : ''}`}
                    onClick={() => onVote(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;

import React, { useState } from 'react';
import Rating from '../Rating/Rating';
import Review from '../Review/Review';
import s from './ItemCard.module.css';

const ItemCard = ({ item, userId, averageRating, onVote }) => {
    const savedRating = item.votes[userId]?.rating || 0;
    const savedReview = item.votes[userId]?.review || '';

    const [selectedRating, setSelectedRating] = useState(savedRating);
    const [review, setReview] = useState(savedReview);

    const handleVoteClick = () => {
        onVote(item.id, selectedRating, review);
        setSelectedRating(0);
    };

    return (
        <div className={s.card}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} className={s.img} />
            <p className={s.ratingtext}>Average rating: {averageRating}/5</p>

            <Rating
                currentRating={selectedRating}
                onVote={setSelectedRating}
            />

            <Review
                value={review}
                onChange={setReview}
            />

            <button
                className={s.btn}
                onClick={handleVoteClick}
                disabled={selectedRating === 0}
            >
                Vote
            </button>
        </div>
    );
};

export default ItemCard;

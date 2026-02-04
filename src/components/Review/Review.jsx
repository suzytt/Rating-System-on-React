import React, { useState } from 'react';
import s from './Review.module.css';

const Review = ({ value, onChange }) => {

    const handleFocus = () => {
        if (value.length > 0) {
            onChange('');
        }
    };

    const handleChange = (e) => {
        onChange(e.target.value.slice(0, 200));
    };

    return (
        <textarea
            className={s.textarea}
            value={value}
            onFocus={handleFocus}
            onChange={handleChange}
            placeholder="Напишите отзыв (до 200 символов, по желанию)"
        />
    );
};

export default Review;

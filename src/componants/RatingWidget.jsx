// components/RatingWidget.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert('Please select a rating between 1 and 5');
      return;
    }
    onRatingSubmit(productId, rating);
    setRating(0);
    setHoveredRating(0);
  };

  return (
    <div style={{ marginTop: 10 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          style={{
            cursor: 'pointer',
            color: star <= (hoveredRating || rating) ? 'gold' : 'gray',
            fontSize: 24,
          }}
        >
          ★
        </span>
      ))}
      <br />
      <button onClick={handleSubmit} style={{ marginTop: 8 }}>
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;

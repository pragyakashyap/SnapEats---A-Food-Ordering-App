import "./reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./reviewCard";
import { useState } from "react";


const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    <ReviewCard key={1} />,
    <ReviewCard key={2} />,
    <ReviewCard key={3} />,
    <ReviewCard key={4} />,
    <ReviewCard key={5} />,
    <ReviewCard key={6} />,
    <ReviewCard key={7} />,
    <ReviewCard key={8} />,
    <ReviewCard key={9} />
  ];
   const reviewsPerPage = 3; // Number of cards to show at a time

   const handleNext = () => {
    // Move to the next set of cards
    if (currentIndex + reviewsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + reviewsPerPage);
    }
  };

  const handlePrevious = () => {
    // Move to the previous set of cards
    if (currentIndex - reviewsPerPage >= 0) {
      setCurrentIndex(currentIndex - reviewsPerPage);
    }
  };

  return (
    <div className="review-section">
      <div className="review-title">
        <h2>Customer Reviews</h2>
        <div className="icon-container">
          <div className="circular-icon" onClick={handlePrevious}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="circular-icon" onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="review-card-container">
      {reviews.slice(currentIndex, currentIndex + reviewsPerPage)}
      </div>
      <div className="rating-review">
        <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732641007/Rating_hchh84.png"/>
       </div>
    </div>
  );
};

export default Reviews;

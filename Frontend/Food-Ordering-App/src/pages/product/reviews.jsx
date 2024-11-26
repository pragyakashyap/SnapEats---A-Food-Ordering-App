import "./reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./reviewCard";


const Reviews = () => {
  return (
    <div className="review-section">
      <div className="review-title">
        <h2>Customer Reviews</h2>
        <div className="icon-container">
          <div className="circular-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="circular-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="review-card-container">
       <ReviewCard/>
       <ReviewCard/>
       <ReviewCard/>
      </div>
    </div>
  );
};

export default Reviews;

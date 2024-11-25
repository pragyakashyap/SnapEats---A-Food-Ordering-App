import { useState, useEffect } from "react";
import "./deals.css";

const DealsSection = () => {
  const [deals, setDeals] = useState([]);

  // Fetch deals from the database (mock API here)
  useEffect(() => {
    fetch("http://localhost:5000/api/deals") // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setDeals(data))
      .catch((error) => console.error("Error fetching deals:", error));
  }, []);

  return (
    <div className="deals-section">
      <div className="top">
      <h2>
        Up to -40% 🎊 Order.uk exclusive deals
      </h2>
      <div className="categories">
        <button>Vegan</button>
        <button>Sushi</button>
        <button className="active">Pizza & Fast food</button>
        <button>Others</button>
      </div>
      </div>
      <div className="deals-container">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <div className="discount">{deal.discount}</div>
            <img src={deal.image} alt={deal.name} className="deal-image" />
            <div className="deal-info">
              <p>Restaurant</p>
              <h4>{deal.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;

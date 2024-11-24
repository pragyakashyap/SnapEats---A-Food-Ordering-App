import "./faq.css";

const Faq = () => {
  return (
    <div className="faq-section">
      <h2>Know more about us!</h2>
      <div className="faq-menu">
        <button>Frequent Questions</button>
        <button>Who we are?</button>
        <button>Partner Program</button>
        <button>Help & Support</button>
      </div>
      <div className="steps-container">
        <div className="step">
          <img src="https://via.placeholder.com/60" alt="Place an Order" />
          <h3>Place an Order!</h3>
          <p>Place order through our website or Mobile app</p>
        </div>
        <div className="step">
          <img src="https://via.placeholder.com/60" alt="Track Progress" />
          <h3>Track Progress</h3>
          <p>You can track your order status with delivery time</p>
        </div>
        <div className="step">
          <img src="https://via.placeholder.com/60" alt="Get Your Order" />
          <h3>Get your Order!</h3>
          <p>Receive your order at a lightning-fast speed!</p>
        </div>
      </div>
      <p className="description">
        Order.UK simplifies the food ordering process. Browse through our
        diverse menu, select your favorite dishes, and proceed to checkout.
        Your delicious meal will be on its way to your doorstep in no time!
      </p>
    </div>
  );
};

export default Faq;

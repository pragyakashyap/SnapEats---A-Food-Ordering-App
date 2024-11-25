import "./hero.css";

const Hero = () => {
  return (
<div className="hero">
<div className="hero-container">
      {/* Left Section */}
      <div className="hero-left">
        <p style={{color:'#03081F'}}>Order Restaurant food, takeaway and groceries.</p>
        <h1>
          Feast Your Senses, <span>Fast and Fresh</span>
        </h1>
        <p>Enter a postcode to see what we deliver</p>
        <div className="hero-search">
          <input type="text" placeholder="e.g. EC4R 3TE" />
          <button>Search</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img
          src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732388441/Screenshot_288_owgrqw.png"
          alt="Woman eating pizza"
          className="hero-image"
        />
      </div>
    </div>
</div>
  );
};

export default Hero;

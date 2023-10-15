const HeroSection=()=>{
    return<main className="hero container">
    <div className="hero-content">
    <h1>YOUR FEET DESERVE THE BEST</h1>
     <p>Discover footwear perfection at NIKE. Elevate your style with our curated collection of shoes that combine comfort, fashion, and quality. Step into our world today!</p>
      <div className="hero-btn">
        <button>Shop Now</button>
        <button className="secondary-btn">Category</button>
      </div>
      <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
    </div>
    <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
    </div>
    </main>;
};
export default HeroSection;
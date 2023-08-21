import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="features">
      {/* Feature cards */}
      <div className="feature-card">
        <img src="/assets/features.png" alt="Key Features" style={{ width: '100px', height: 'auto' }} />
        <h2>Key features</h2>
        <p>
            <span>Manage your data with Agens Enterprise Package <br /> Essential enterprise features such as high availability and sharding are provided</span>
        </p>
        <img src="/assets/features.png" alt="Key Features" style={{ width: '100px', height: 'auto' }} />
      </div>
      {/* Repeat for other feature cards */}
    </section>
  );
}

export default FeaturesSection;

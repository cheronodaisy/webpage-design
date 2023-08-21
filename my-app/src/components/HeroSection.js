import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/assets/hero.png" alt="Agens SQL" style={{ width: '100px', height: 'auto' }} />
        <h1>An integration of Bitnine's DB technology and PG expertise</h1>
        <p>
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise
            and knowledge accumulated through database research and development.

            The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures
            the efficiency and scalability of data management.

            Get AgensSQL now for stable operation and management services at a reduced
            maintenance cost.
        </p>
        <button className="cta-button">CONTACT</button>
        <button className="cta-button">BROCHURE</button>
        <button className="cta-button">BLOG</button>        
      </div>

    </section>
  );
}

export default HeroSection;

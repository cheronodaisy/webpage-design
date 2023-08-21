import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services">
      {/* Service cards */}
      <div className="service-card">
        <h2>AgensSQL DB Engine</h2>
        <p>Enhanced Data Security</p>
        <p>
            <span>AgensSQL is a PostgreSQL-based DBMS <br /> that guarantees optimal security and stability.</span>
        </p>
      </div>
      {/* Repeat for other service cards */}
      <div className="service-card">
        <h2>Agens Enterprise Package</h2>
        <p>
        <span>Agens Enterprise Package comes with a high availability management server that <br /> supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.</span>
        </p>
        <div>
            <p>Agens HA Manager</p>
            <img src="/assets/services.png" alt="Agens HA Manager" style={{ width: '100px', height: 'auto' }}/>
        </div>
        <div>
            <p>Agens Enterprise Manager</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

import React from 'react';
import Tooltip from './Tooltip';
import FlipCard from './FlipCard';

function FeaturesSection() {

  return (
    <section id="features" className="features">
      <div className='feature-cards'>
        <div className="feature-card">
          <img src="/assets/hero-2.png" alt="Key Features" />
        </div>
        <div className="feature-card">
        <h2>Key features</h2>
        <p>
            <span>Manage your data with Agens Enterprise Package <br /> Essential enterprise features such as high availability and sharding are provided</span>
        </p>
        <img src="/assets/features.png" alt="Key Features" />
      </div>
      <div className="feature-card">
        <h2>AgensSQL DB Engine</h2>
        <h3>Enhanced Data Security</h3>
        <p>
            <span>AgensSQL is a PostgreSQL-based DBMS <br /> that guarantees optimal security and stability.</span>
        </p>
        <Tooltip />
      
      </div>
      <div className="feature-card">
        <h2>Agens Enterprise Package</h2>
        <p>
        <span>Agens Enterprise Package comes with a high availability management server that <br /> supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.</span>
        </p>
          <div className="feature-grid">
              <div className="feature-grid-item">
                <h4>Agens HA Manager</h4>
                <p>HA Clustering - Failover/Failback, Load-balancing</p>
                <img src="/assets/services.png" alt="Feature" />
              </div>
              <div className="feature-grid-item">
              <h4>Agens Enterprise Manager</h4>
              <div className="card-container">
                <FlipCard frontContent="Backup/Restore" backContent="provides a convenient interface for backup & restore" />
                <FlipCard frontContent="DB Monitoring Dashboard" backContent="provides status for server CPU & memory" />
                <FlipCard frontContent="Schedule Management" backContent="provides UX dedicated to scheduling" />
                <FlipCard frontContent="Database Audit" backContent="enables auditing via user interface" />
                <FlipCard frontContent="SQL Monitoring" backContent="extracts monitoring results in query" />
                <FlipCard frontContent="Performance Management" backContent="monitors and collects operation status & statistical data" />
              </div>
              </div>
          </div>
      </div>
    </div>      
      
    </section>
  );
}

export default FeaturesSection;

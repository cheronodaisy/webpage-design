import React from 'react';

function Tooltip() {
  return (
    <div className="tooltip">
      <div className="tooltip-card">
        <img src="/assets/password.png" alt="Tooltip" />
        <div className="tooltip-content">
          <ul>
            <li>User password policy reinforces login security</li>
            <li>Excessive failed login attempts lock an account</li>
            <li>Define rules for password complexity</li>
          </ul>
        </div>
      </div>
      <div className="tooltip-card">
        <img src="/assets/data-security.png" alt="Tooltip" />
        <div className="tooltip-content">
          <ul>
            <li>Enhanced data security of user personal information</li>
            <li>Resolve privacy issues in preparation for security audits</li>
            <li>Encryption or masking with unidentifiable special characters</li>
          </ul>
        </div>
      </div>
      <div className="tooltip-card">
        <img src="/assets/auditing.png" alt="Tooltip" />
        <div className="tooltip-content">
          <ul>
            <li>Monitors database activities and collects data</li>
            <li>Traces object accessed or DDL & DML statements executed by a user</li>
            <li>Records all actions in logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;

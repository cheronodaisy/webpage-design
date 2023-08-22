import React, { useState } from 'react';

function Tooltip() {
  const [tooltipVisible1, setTooltipVisible1] = useState(false);
  const [tooltipVisible2, setTooltipVisible2] = useState(false);
  const [tooltipVisible3, setTooltipVisible3] = useState(false);

  const toggleTooltip1 = () => {
    setTooltipVisible1(!tooltipVisible1);
  };

  const toggleTooltip2 = () => {
    setTooltipVisible2(!tooltipVisible2);
  };

  const toggleTooltip3 = () => {
    setTooltipVisible3(!tooltipVisible3);
  };

  return (
    <div className="tooltip-container">
      <div className={`tooltip ${tooltipVisible1 ? 'active' : ''}`} onClick={toggleTooltip1}>
        <img src="/assets/password.png" alt="Tooltip 1" />
        <div className="tooltip-content">
          <ul>
            <li>User password policy reinforces login security</li>
            <li>Excessive failed login attempts lock an account</li>
            <li>Define rules for password complexity</li>
          </ul>
        </div>
      </div>
      <div className={`tooltip ${tooltipVisible2 ? 'active' : ''}`} onClick={toggleTooltip2}>
        <img src="/assets/data-security.png" alt="Tooltip 2" />
        <div className="tooltip-content">
          <ul>
            <li>Enhanced data security of user personal information</li>
            <li>Resolve privacy issues in preparation for security audits</li>
            <li>Encryption or masking with unidentifiable special characters</li>
          </ul>
        </div>
      </div>
      <div className={`tooltip ${tooltipVisible3 ? 'active' : ''}`} onClick={toggleTooltip3}>
        <img src="/assets/auditing.png" alt="Tooltip 3" />
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

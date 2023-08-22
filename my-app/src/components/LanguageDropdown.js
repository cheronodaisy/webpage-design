import React from 'react';

function LanguageDropdown() {
  return (
    <select className="language-dropdown">
      <option>Select Language</option>
      <option value="en">English</option>
      <option value="ko">Korean - 한국어</option>
    </select>
  );
}

export default LanguageDropdown;

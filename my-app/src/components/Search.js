import React, { useState } from 'react';

function Search() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="search">
      <div className={`search-icon ${isExpanded ? 'expanded' : ''}`} onClick={toggleSearch}>
        <i className="fas fa-search"></i>
      </div>
      <input
        type="text"
        placeholder="SEARCH"
        className={`search-input ${isExpanded ? 'expanded' : ''}`}
      />
    </div>
  );
}

export default Search;

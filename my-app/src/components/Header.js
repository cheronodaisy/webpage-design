import React from 'react';
import Search from './Search';
import LanguageDropdown from './LanguageDropdown';

function Header() {
  return (
    <header className='header'>
      <div className="top-section">
        <div className="social-links">
          <Search />
          <li><a href="https://bitnine.net/contact/">CONTACT</a></li> 
          <a href="https://github.com/bitnine-oss/agensgraph" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="GitHub" />
          </a>
          <a href="https://github.com/bitnine-oss/agensgraphps://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer">
            <img src="/assets/youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/company/bitnineglobal/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="Linkedin" />
          </a>
          <a href="https://www.facebook.com/bitninesns/">
            <img src="/assets/fb.png" alt="LinkedIn" />
          </a>
          <a href="https://blog.naver.com/bitnine9">
            <img src="/assets/medium.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="logo-nav">
          <div className="logo"><img src="/assets/bitnine-logo_.png" alt="Bitnine" /></div>
          <LanguageDropdown />
            <nav>
              <ul>
                <li><a href="https://bitnine.net/agensgraph/">PRODUCTS</a></li>
                <li><a href="https://bitnine.net/graph-database-use-case/">USE CASES</a></li>
                <li><a href="https://bitnine.net/services/">SERVICES</a></li>
                <li><a href="https://bitnine.net/documentation/">RESOURCES</a></li>
                <li><a href="https://bitnine.net/blog/">BLOG</a></li>
                <li><a href="https://bitnine.net/company/">COMPANY</a></li>
                <li><a href="https://bitnine.net/ir-announcement/">IR</a></li>
                <li>
                  <button className="button">TRY FREE</button>
                </li>
              </ul>  
            </nav>
        </div>
    
    </header>
  );
}

export default Header;

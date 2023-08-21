import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <a href="https://bitnine.net/agensgraph/">PRODUCTS</a>
            <ul>
              <li><a href="https://bitnine.net/agenssql/">Relational Database</a></li>
              <li><a href="https://bitnine.net/graph-database/">Graph Database</a></li>
              <li><a href="https://bitnine.net/graph-database-2/">Graph-based Solution</a></li>
            </ul>
            </li>
          <li><a href="https://bitnine.net/graph-database-use-case/">USE CASES</a></li>
          <li><a href="https://bitnine.net/services/">SERVICES</a></li>
          <li>
            <a href="https://bitnine.net/documentation/">RESOURCES</a>
            <ul>
              <li><a href="https://bitnine.net/documentation/">Documentation</a></li>
              <li><a href="https://bitnine.net/learn">Learn</a></li>
            </ul>
            </li>
          <li><a href="https://bitnine.net/blog/">BLOG</a></li>
          <li>
            <a href="https://bitnine.net/company/">COMPANY</a>
            <ul>
              <li><a href="https://bitnine.net/company/">About Us</a></li>
              <li><a href="https://bitnine.net/contact/">Contact</a></li>
            </ul>
            </li>
        </ul>
      </div>
      <div className="footer-social">
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
          <li><a href="https://bitnine.net/contact/">CONTACT</a></li>
        </div>
    </footer>
  );
}

export default Footer;

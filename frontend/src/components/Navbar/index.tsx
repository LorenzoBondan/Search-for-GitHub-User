import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
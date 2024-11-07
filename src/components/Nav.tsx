import React from 'react';
import { Link } from 'react-router-dom';
 
  // TODO: Add necessary code to display the navigation bar and link between the pages
const Nav: React.FC =() => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/search">Candidate Search</Link>
        </li>
        <li>
          <Link to="/saved">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <div className= 'nav'>
            <ul>
              <li><Link to="/">India</Link></li>
               <li><Link to="/NewYork">NewYork</Link></li>
               <li><Link to="/France">France</Link></li>
               {/*}<li><Link to="/homePage">homePage</Link></li>*/}
            </ul>
        </div>
    );
  }
}

export default Nav;

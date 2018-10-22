import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommonUserNav from './CommonUserNav';

class CommonNav extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.screen.width <= 768) {
        this.setState({ isMobile: true });
      } else {
        this.setState({ isMobile: false });
      }
    });
  }

  state = {
    height: '0',
    isMobile: false
  }

  displayUlList = () => {
    const { height } = this.state;

    if (height === '0') {
      this.setState({ height: '170px' });
    } else {
      this.setState({ height: '0' });
    }
  }

  render() {
    const { isLoggedIn, imgUrl } = this.props;
    const { height, isMobile } = this.state;

    return (
      <nav className="navigation-bar">
        <Link to="/" className="navigation-brand">
          <img src="../../assets/img/logormww.png" alt="Logo" />
        </Link>
        <button type="button" data-toggle="navigation" data-target="#navigationId" aria-controls="navigation" aria-expanded="false" className="navigation-toggler" id="navigationToggler" onClick={this.displayUlList}>
          <i className="fa fa-bars" />
        </button>
        <div className="navigation" id="navigationId" style={{ height }}>
          <div className="navigation-items-wrapper">
            <form className="navigation-form" method="POST">
              <input type="search" id="searchInput" placeholder="Search a ride" />
              <button type="submit" id="submit">Search</button>
            </form>
            <ul className="navigation-ul">
              <li className="navigation-li">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="navigation-li">
                <Link to="/all-offers">Ride Offers</Link>
              </li>
              <li className="navigation-li" id="logout">Log out</li>
            </ul>
          </div>
        </div>
        { isLoggedIn ? <CommonUserNav imgUrl={imgUrl} /> : '' }
      </nav>
    );
  }
}

CommonNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default CommonNav;
import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (
    <div>
        <h2>Portfolio</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active"> Portfolio </NavLink>
        <NavLink to="/contact" activeClassName="is-active"> Contact </NavLink>
    </div>
);

export default Header;
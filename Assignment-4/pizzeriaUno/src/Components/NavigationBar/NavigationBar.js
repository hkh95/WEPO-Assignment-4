import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div>
                <div className="title">
                    <h1>PiazzaUno</h1>
                </div>
                <NavigationBarLinkWrapper>
                    <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-link">Menu</NavLink>
                    <NavLink
                        to="/chatrooms"
                        activeClassName="active"
                        className="nav-link">Offers</NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="active"
                        className="nav-link">Order</NavLink>
                </NavigationBarLinkWrapper>
            </div>
        </nav>
    );
};


export default NavigationBar;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavSide extends React.Component{
	render(){
		return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-sitemap"></i>
                                <span>Product</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">Product Manager</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu">Second Level Link</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/order">
                                <i className="fa fa-sitemap"></i>
                                <span>Order</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">Order</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/account">
                                <i className="fa fa-sitemap"></i>
                                <span>Account</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/account" activeClassName="active-menu">Second Level Link</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}

export default NavSide;

/**
 * Created by xiao on 2017/5/8.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render(){
        const { backGroundImg } = this.props;
        const vertical = this.props.vertical || 'center';
        return (
            <header id="header">
                <div className="nav">
                    <div className="nav-wrap">
                        <h1 className="logo"><a href="/">LOLILI</a></h1>
                        <nav id="nav">
                            <ul>
                                <li><NavLink exact to="/" activeClassName="hover">首页</NavLink></li>
                                <li><NavLink exact to="/blog" activeClassName="hover">博客</NavLink></li>
                                <li id="message-board-link"><NavLink exact to="/message-board" activeClassName="hover">友言</NavLink></li>
                                <li id="about-link"><NavLink exact to="/about" activeClassName="hover">关于</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    {
                        backGroundImg ? <div className="nav-bg" style={{background: `url(${backGroundImg}) no-repeat center ${vertical} / cover fixed`}}/>:
                        <div className="nav-bg"/>
                    }

                </div>
                {this.props.children}
            </header>
        );
    }
}

Header.propTypes = {
    backGroundImg: PropTypes.string
};

Header.defaultProps = {
    backGroundImg: ''
};

export default Header;
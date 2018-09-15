import React, { PureComponent } from 'react'
import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
//import { default as Navbar, MenuElementKind } from 'react-navbar'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
//import './stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const MainMenu = () =>
    <Navbar fluid collapseOnSelect className="navbar-green">
        <Navbar.Header>
            <Navbar.Brand>
                <div className="container-Logo">
                    <a href="#" target="_blank" role="button" className="linkLogo">
                        <img src="/src/images/imgLogo.jpg"
                            alt="логотип" width="40" height="40" /> iSMART
                    </a>
                </div>

            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#" className="navbarborder">
                    Обучение
                </NavItem>
                <NavItem eventKey={2} href="#" className="navbarborder">
                    О проекте
                </NavItem>
                <NavItem eventKey={3} href="#" className="navbarborder">
                    Блог
                </NavItem>
                <NavItem eventKey={3} href="#" className="navbarborder">
                    Вебинары
                </NavItem>
                <NavItem eventKey={3} href="#" className="navbarborder">
                    Диагностика
            </NavItem>

            </Nav>
            <div >
                <form class="navbar-form navbar-left " role="search">
                    <button type="submit" class=" btn btn-default navbar-MyBtn"><span class="glyphicon glyphicon-search"></span></button>
                </form>
            </div>
            <Nav pullRight>
                <NavItem eventKey={1} href="#" className="navbarborder">
                    Вход
                </NavItem>
                <NavItem eventKey={2} href="#" className="navbarborderReg">
                    Регистрация
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

export const AboutMenu = ({ match }) =>
    <div>
        <li>
            <NavLink to="/about"
                style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>

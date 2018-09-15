import React, { PureComponent } from 'react'
import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
//import { default as Navbar, MenuElementKind } from 'react-navbar'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
//import './stylesheets/menus.scss'
import { LinkContainer } from 'react-router-bootstrap';

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
                <LinkContainer to="/Training" >
                    <NavItem className="navbarborder">Обучение</NavItem>
                </LinkContainer>
                <LinkContainer to="/AboutProject" >
                    <NavItem className="navbarborder">О проекте</NavItem>
                </LinkContainer>

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
                    <button class=" btn btn-default navbar-MyBtn"><span class="glyphicon glyphicon-search"></span></button>
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
            <NavLink to="/Training"
                style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/Training/history"
                activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/Training/services"
                activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/Training/location"
                activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>

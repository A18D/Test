import React, {PureComponent} from 'react';
import {lessons} from '../../../JSONFiles/Lessons';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const LinkItem = (lesson, i) => {
  //if (i > 1) {
  <LinkContainer to={`/Training/begin/${lesson.id}`} className="navbarborder">
    <NavItem className="navbarborder">
      {lesson.title}
      {i}
    </NavItem>
  </LinkContainer>;
  //	}
};

export class MenuTraining extends React.Component {
  render () {
    return (
      <div>
        <div>
          <ul id="navbar-BeginContainer">
            <li className="leftRightImg">
              <img src="/src/images/leftImageBegin.png" alt="логотип" />
            </li>

            <li className="centerMenu">
              <Navbar fluid className="navbar-Begin">

                <Navbar.Toggle />

                <Navbar.Collapse>
                  <div id="beginMenu">
                    <Nav>
                      {lessons.map ((lesson, i) => {
                        if (i == 0) {
                          return (
                            <LinkContainer
                              to={`/Training/begin/${lesson.id}`}
                              className="navbarborder"
                            >
                              <NavItem>
                                {lesson.title}{i}
                              </NavItem>
                            </LinkContainer>
                          );
                        } else {
                          return (
                            <LinkContainer
                              to={`/Training/begin/${lesson.id}`}
                              className="navbarborder"
                            >
                              <NavItem>
                                {lesson.title}{i}
                              </NavItem>
                            </LinkContainer>
                          );
                        }
                      })}
                    </Nav>
                  </div>
                </Navbar.Collapse>
              </Navbar>

            </li>

            <li className="leftRightImg">
              <img src="/src/images/rightImageBegin.png" alt="логотип" />
            </li>

          </ul>

        </div>

      </div>
    );
  }
}

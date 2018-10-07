import React, {PureComponent} from 'react';
import {lessons} from '../../../JSONFiles/Lessons';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

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
                      {lessons.map (lesson => {
                        return (
                          <LinkContainer
                            to={`/Training/begin/${lesson.id}`}
                            className="navbarborder"
                          >
                            <NavItem>
                              {lesson.title}
                            </NavItem>
                          </LinkContainer>
                        );
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

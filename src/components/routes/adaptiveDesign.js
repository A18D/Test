import React, {PureComponent} from 'react';
import {MainMenu} from '../menus';

export class AdaptiveDesign extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      visibleTag: '',
      idDomElement: '',
    };

    let elemBody = document.body;
    this.styleBody = elemBody.className;
  }

  changeID (elem, prefixID, level) {
    if (elem && elem.childNodes) {
      for (let i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].nodeType != 1) {
          continue;
        }

        if (
          elem.childNodes[i].childNodes &&
          elem.childNodes[i].childNodes.length > 0
        ) {
          this.changeID (elem.childNodes[i], prefixID, level + 1);
        }

        if (elem.childNodes[i].hasAttribute ('id')) {
          let idElem = elem.childNodes[i].getAttribute ('id');

          if (idElem && !idElem.startsWith (prefixID)) {
            elem.childNodes[i].setAttribute ('id', prefixID + idElem);
          }
        }
      } // end for

      if (!level && elem.nodeType == 1 && elem.hasAttribute ('id')) {
        let idElem = elem.getAttribute ('id');

        if (idElem && !idElem.startsWith (prefixID)) {
          elem.setAttribute ('id', prefixID + idElem);
        }

        let elemCloseItem = document.getElementById (
          prefixID + elem.dataset.idtag + '_close'
        );

        if (elemCloseItem)
          elemCloseItem.addEventListener (
            'click',
            this.handleClose.bind (this)
          );
      } // end if
    }
  }

  getFirstElemByClassName (nameClass) {
    let elemPanel, elemsPanel = document.getElementsByClassName (nameClass);

    if (elemsPanel && elemsPanel.length) {
      elemPanel = elemsPanel[0];
    }

    return elemPanel;
  }

  replaceCloneElements (elemPanel, elemClone) {
    let successReplace = false;

    if (elemPanel.childNodes && elemPanel.childNodes.length > 2) {
      let idElem, saveElem;

      if (this.state.idDomElement)
        saveElem = document.getElementById (this.state.idDomElement);
      else {
        let indexNodes = Math.floor (elemPanel.childNodes.length / 2);
        saveElem = elemPanel.childNodes[indexNodes];
        idElem = saveElem.getAttribute ('id');
        this.setState ({
          visibleTag: this.state.visibleTag,
          idDomElement: idElem,
        });
        elemPanel.insertBefore (elemClone, saveElem);
      }

      saveElem.classList.toggle ('hide');
      successReplace = true;
    }

    return successReplace;
  }

  showTag (e, id, pVisible) {
    let result = false;

    if (
      (!pVisible && !/close/.test (e.target.id)) ||
      (pVisible && this.state.visibleTag)
    )
      return result;

    let elemMask = document.getElementById (id);

    if (e && elemMask) {
      elemMask.classList.toggle ('mask');

      if (
        elemMask.id == 'mask_panel' &&
        ((pVisible && !this.state.visibleTag) ||
          (!pVisible && this.state.visibleTag))
      ) {
        let prefixID = 'DOUBLE';
        let eNode = e.currentTarget;

        if (eNode && eNode.hasAttribute ('data-idtag')) {
          let elemPanel = this.getFirstElemByClassName ('sad_panel');

          if (!elemPanel) return;

          if (pVisible) {
            if (eNode.className == 'sad_item') {
              let elemClone = eNode.cloneNode (true);
              let successReplace = this.replaceCloneElements (
                elemPanel,
                elemClone
              );

              if (!successReplace) {
                elemPanel.appendChild (elemClone);
              }

              this.changeID (elemClone, prefixID, 0);
              eNode = elemClone;
            }
            eNode.classList.toggle ('active');
            let idvisibleTag = prefixID + pVisible
              ? eNode.id
              : eNode.dataset.idtag;
            this.setState ({visibleTag: idvisibleTag});

            let elemPanelItem = document.getElementById (
              idvisibleTag + '_Panel'
            );

            if (elemPanelItem) {
              elemPanelItem.classList.toggle ('active');
            }

            let elemButtonPay = document.getElementById (
              idvisibleTag + '_Button'
            );

            if (elemButtonPay) {
              elemButtonPay.classList.toggle ('active');
            }
          } else {
            eNode = document.getElementById (prefixID + eNode.dataset.idtag);
            this.replaceCloneElements (elemPanel, eNode);
            elemPanel.removeChild (eNode);
            this.setState ({visibleTag: '', idDomElement: ''});
          }

          result = true;
        }
      }
    }

    return result;
  }

  handleClose (e) {
    let blackout = this.showTag (e, 'mask_panel', false);

    if (blackout) {
      this.showTag (e, 'maskAll', false);
    }
  }

  handleSelectItem = e => {
    let blackout = this.showTag (e, 'mask_panel', true);

    if (blackout) {
      this.showTag (e, 'maskAll', true);
    }
  };

  render () {
    let elemBody = document.body;
    elemBody.className = 'sad_total';

    return (
      <div>
        <MainMenu />
        <div class="sad_block">

          <div class="sad_panel">
            <div id="mask_panel" />

            <div
              class="sad_item"
              id="Mobile"
              data-idtag="Mobile"
              onClick={e => this.handleSelectItem (e)}
            >
              <div class="sad_panelItem" id="Mobile_Panel">
                <p class="sad_panelItemTitle">Confirmation</p>
                <img
                  src={`./src/images/cross.svg`}
                  id="Mobile_close"
                  class="sad_close"
                  data-idtag="Mobile"
                  onClick={e => this.handleClose (e)}
                />
              </div>
              <img src={`./src/images/device.svg`} class="sad_img" />
              <p class="sad_title">MOBILE</p>
              <p class="sad_text">
                Get notifications about new releases in our mobile app
              </p>
              <p class="sad_title">
                <sup>$</sup><big>10</big> <sub><small>/ month</small></sub>
              </p>
              <button id="Mobile_Button" class="sad_button">
                Confirm and pay
              </button>
            </div>
            <div
              class="sad_item"
              id="Desktop"
              data-idtag="Desktop"
              onClick={e => this.handleSelectItem (e)}
            >
              <div class="sad_panelItem" id="Desktop_Panel">
                <p class="sad_panelItemTitle">Confirmation</p>
                <img
                  src={`./src/images/cross.svg`}
                  id="Desktop_close"
                  class="sad_close"
                  data-idtag="Desktop"
                  onClick={e => this.handleClose (e)}
                />
              </div>
              <img src={`./src/images/laptop.svg`} class="sad_img" />
              <p class="sad_title">Desktop</p>
              <p class="sad_text">
                Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms
                {' '}
              </p>
              <p class="sad_title">
                <sup>$</sup><big>15</big> <sub><small>/ month</small></sub>
              </p>
              <button id="Desktop_Button" class="sad_button">
                Confirm and pay
              </button>
            </div>
            <div
              class="sad_item"
              id="TV"
              data-idtag="TV"
              onClick={e => this.handleSelectItem (e)}
            >
              <div class="sad_panelItem" id="TV_Panel">
                <p class="sad_panelItemTitle">Confirmation</p>
                <img
                  src={`./src/images/cross.svg`}
                  id="TV_close"
                  class="sad_close"
                  data-idtag="TV"
                  onClick={e => this.handleClose (e)}
                />
              </div>
              <img src={`./src/images/laptop.svg`} class="sad_img" />
              <p class="sad_title">TV</p>
              <p class="sad_text">
                Watch your favorite series at home on large screen with our TV application
              </p>
              <p class="sad_title">
                <sup>$</sup><big>20</big> <sub><small>/ month</small></sub>
              </p>
              <button id="TV_Button" class="sad_button">
                Confirm and pay
              </button>
            </div>
          </div>
        </div>

        <div id="maskAll" />

      </div>
    );
  }

  componentWillUnmount () {
    let elemBody = document.body;
    elemBody.className = this.styleBody;
  } //~componentDidMount
}

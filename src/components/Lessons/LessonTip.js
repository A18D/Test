import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson, isEmptyStr} from '../../lib/str';

class LessonTip extends PureComponent {
  static propTypes = {
    numberTip: PropTypes.number.isRequired,
    setNoEvaluation: PropTypes.func.isRequired,
    incNumberTip: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    firstTip: PropTypes.string.isRequired,
    secondTipDragAndDrop: PropTypes.array.isRequired,
    thirdTipDragAndDrop: PropTypes.array.isRequired,
  };

  constructor (props) {
    super (props);

    this.state = {
      showTip: false,
    };
  }

  handleTip = () => {
    if (this.props.numberTip > 0) {
      let pShowTip = !this.state.showTip;
      this.setState ({showTip: pShowTip}); //, numberTip: numberTip

      if (this.props.numberTip == 1 && isEmptyStr (this.props.firstTip)) {
        this.props.incNumberTip ();
      } else this.props.setNoEvaluation ();
    }
  };

  render () {
    return (
      <p>
        <div class="HorizontalContainer">
          <button
            class="HorizontalContainer_item_ButtonTip"
            onClick={this.handleTip}
          >
            <i>i</i>
          </button>
          <p id="titleTip" class="HorizontalContainer_item_pTip">
            Подсказка
          </p>
        </div>
        <div>
          {this.props.numberTip == 1 &&
            this.state.showTip &&
            <div class="HorizontalContainerTabTip Top40">
              <div class="HorizontalContainer_item_TabTip BlueBackground">
                <div class="VerticalText">
                  Подсказка {this.props.numberTip}
                </div>
              </div>
              <div class="HorizontalContainer_item_ContentTip">
                {this.props.firstTip}
                <br />
                <br />
                <a onClick={this.props.incNumberTip}>Еще одна подсказка ∨</a>
              </div>
            </div>}
          {this.props.numberTip == 2 &&
            this.state.showTip &&
            <div>
              {this.props.type == 'dragAndDrop' &&
                <div class="HorizontalContainerTabTip Top40">
                  <div class="HorizontalContainer_item_TabTip BlueBackground">
                    <div class="VerticalText">
                      Подсказка {this.props.numberTip}
                    </div>
                  </div>
                  <div class="HorizontalContainer_item_ContentTip">
                    <div class="row">
                      {this.props.secondTipDragAndDrop.map (answer => {
                        return (
                          <div
                            key={answer.sign}
                            class="col-lg-3 col-md-4 col-6 thumb"
                          >
                            <div key={answer.sign} class="VerticalContainer">
                              <a
                                key={answer.sign}
                                data-fancybox="gallery"
                                href={`/src/images/${answer.image}`}
                                target="_blank"
                              >
                                <img
                                  key={answer.sign}
                                  class="tipDroppableImg"
                                  src={`/src/images/${answer.image}`}
                                  alt="изображение"
                                  height="100px"
                                />
                              </a>
                              <input
                                key={answer.sign}
                                type="text"
                                class="tipDroppableInput"
                                name="inputDroppable"
                                value={answer.sign}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <br />
                    <br />
                    <a onClick={this.props.incNumberTip}>Получить ответ ∨</a>
                  </div>
                </div>}
            </div>}
          {this.props.numberTip >= 3 &&
            this.state.showTip &&
            <div>
              {this.props.type == 'dragAndDrop' &&
                <div class="HorizontalContainerTabTip Top40">
                  <div class="HorizontalContainer_item_TabTip GreenBackground">
                    <div class="VerticalText">Ответ</div>
                  </div>
                  <div class="HorizontalContainer_item_ContentTip">

                    <div class="row">
                      {this.props.thirdTipDragAndDrop.map (answer => {
                        return (
                          <div
                            key={answer.sign}
                            class="col-lg-3 col-md-4 col-6 thumb"
                          >
                            <div key={answer.sign} class="VerticalContainer">
                              <a
                                key={answer.sign}
                                data-fancybox="gallery"
                                href={`/src/images/${answer.image}`}
                                target="_blank"
                              >
                                <img
                                  key={answer.sign}
                                  class="tipDroppableImg"
                                  src={`/src/images/${answer.image}`}
                                  alt="изображение"
                                  height="100px"
                                />
                              </a>
                              <input
                                key={answer.sign}
                                type="text"
                                class="tipDroppableInput"
                                name="inputDroppable"
                                value={answer.sign}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>}
            </div>}
        </div>
      </p>
    );
  }
}

let mapStateToProps = state => {
  let questions = [];
  let lesson = getNameLesson (location.hash);
  if (lesson.length > 1) questions = state.dataLessons[lesson].questions;

  let currentTask = state.currentTask;
  let type = '';
  let countTips = 0;
  let firstTip = '';
  let secondTipDragAndDrop = [];
  let thirdTipDragAndDrop = [];

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    let question = questions[currentTask];
    type = question.type;
    let tips = questions[currentTask].tips;

    if (Array.isArray (tips)) {
      countTips = tips.length;

      if (countTips == 3) {
        firstTip = tips[0].text;

        if (type == 'dragAndDrop') {
          secondTipDragAndDrop = tips[1].answers;
          thirdTipDragAndDrop = tips[2].answers;

          if (
            !Array.isArray (secondTipDragAndDrop) ||
            secondTipDragAndDrop.length == 0
          )
            secondTipDragAndDrop = [];

          if (
            !Array.isArray (thirdTipDragAndDrop) ||
            thirdTipDragAndDrop.length == 0
          )
            thirdTipDragAndDrop = [];
        }
      }
    }
  }

  return {
    type: type,
    firstTip: firstTip,
    secondTipDragAndDrop: secondTipDragAndDrop,
    thirdTipDragAndDrop: thirdTipDragAndDrop,
  };
};

export default connect (mapStateToProps) (LessonTip);

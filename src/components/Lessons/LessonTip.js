import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson, isEmptyStr} from '../../lib/str';
import TipNoteImage from './LessonsType/Tips/NoteImage';
import TemplateTip from './LessonsType/Tips/TemplateTip';
import TipCollectionNoteImage from './LessonsType/Tips/CollectionNoteImage';

class LessonTip extends PureComponent {
  static propTypes = {
    numberTip: PropTypes.number.isRequired,
    setNoEvaluation: PropTypes.func.isRequired,
    incNumberTip: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    firstTip: PropTypes.string.isRequired,
    secondTipDragAndDrop: PropTypes.array.isRequired,
    thirdTipDragAndDrop: PropTypes.array.isRequired,
    secondTipText: PropTypes.string.isRequired,
    secondTipImage: PropTypes.string.isRequired,
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
            <TemplateTip
              numberTip={this.props.numberTip}
              incNumberTip={this.props.incNumberTip}
              isAnswer={false}
            >
              {this.props.firstTip}
            </TemplateTip>}
          {this.props.numberTip == 2 &&
            this.state.showTip &&
            <div>
              {this.props.type == 'dragAndDrop' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={false}
                >
                  <TipCollectionNoteImage
                    ArrData={this.props.secondTipDragAndDrop}
                  />
                </TemplateTip>}

              {this.props.type == 'choice' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={false}
                >
                  <TipNoteImage
                    numberTip={this.props.numberTip}
                    note={this.props.secondTipText}
                    image={this.props.secondTipImage}
                    addClassTab="BlueBackground"
                  />
                </TemplateTip>}

            </div>}
          {this.props.numberTip >= 3 &&
            this.state.showTip &&
            <div>
              {this.props.type == 'dragAndDrop' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={true}
                >
                  <TipCollectionNoteImage
                    ArrData={this.props.thirdTipDragAndDrop}
                  />
                </TemplateTip>}
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
  let secondTipText = '';
  let secondTipImage = '';

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
        } else if (type == 'choice') {
          secondTipText = tips[1].text;
          secondTipImage = tips[1].image;
        }
      }
    }
  }

  return {
    type: type,
    firstTip: firstTip,
    secondTipDragAndDrop: secondTipDragAndDrop,
    thirdTipDragAndDrop: thirdTipDragAndDrop,
    secondTipText: secondTipText,
    secondTipImage: secondTipImage,
  };
};

export default connect (mapStateToProps) (LessonTip);

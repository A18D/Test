import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MenuTraining from '../routes/training/begin';
import {LessonTimer} from './LessonTimer';
import {LessonTip} from './LessonTip';
import {
  incrementCurrentTask,
  initCurrentTask,
  initCountRightAnswers,
  incrementCountPoints,
  initCountPoints,
  incrementCountCoins,
  initCountCoins,
} from '../../actions';
import {getNameLesson} from '../../lib/str';
import {speakTitleTask} from '../../lib/speak';
import LessonDragDrop from './LessonsType/DragDrop';
import ResultTask from './LessonsType/ResultTask';

class LessonTemplate extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    infoPoints: PropTypes.string.isRequired,
    infoCoins: PropTypes.string.isRequired,
    countRightAnswers: PropTypes.number.isRequired,
    countAnswers: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currentTask: PropTypes.number.isRequired,
    countTasks: PropTypes.number.isRequired,
    incrementCurrentTask: PropTypes.func.isRequired,
    initCurrentTask: PropTypes.func.isRequired,
    initCountRightAnswers: PropTypes.func.isRequired,
    incrementCountPoints: PropTypes.func.isRequired,
    initCountPoints: PropTypes.func.isRequired,
    incrementCountCoins: PropTypes.func.isRequired,
    initCountCoins: PropTypes.func.isRequired,
  };

  constructor (props) {
    super (props);

    this.state = {
      stage: 'lesson', //lesson, success, failed, tip1, tip2, tip3
      numberTip: 0,
    };
  }

  handleConfirm = () => {
    const {
      incrementCurrentTask,
      initCurrentTask,
      initCountRightAnswers,
      initCountPoints,
      initCountCoins,
      incrementCountPoints,
      incrementCountCoins,
    } = this.props;
    initCountRightAnswers ();

    if (this.props.countRightAnswers == 2) {
      //this.props.countAnswers)
      if (this.props.currentTask < this.props.countTasks - 1) {
        incrementCurrentTask ();
        incrementCountPoints ();
        incrementCountCoins ();
      } else {
        initCurrentTask ();
        initCountPoints ();
        initCountCoins ();
      }

      this.setState ({stage: 'success', numberTip: 0});
    } else {
      let numberTip = this.state.numberTip;
      numberTip++;
      this.setState ({stage: 'failed', numberTip: numberTip});
    }

    setTimeout (() => {
      this.setState ({stage: 'lesson'}); //, numberTip: numberTip
    }, 1000);
  };

  incNumberTip = () => {
    let numberTip = this.state.numberTip;
    numberTip++;
    this.setState ({stage: 'lesson', numberTip: numberTip}); 
  };

  componentDidMount () {
    const {
      initCurrentTask,
      initCountRightAnswers,
      initCountPoints,
      initCountCoins,
    } = this.props;

    initCountRightAnswers ();
    initCurrentTask ();
    initCountPoints ();
    initCountCoins ();
  }

  render () {
    return (
      <p>
        <p>
          <MenuTraining />
          <div class="HorizontalContainer Min_Height">
            <div>
              <div class="HorizontalContainer">
                <button
                  class="HorizontalContainer_item_ButtonCircle"
                  onClick={e => speakTitleTask ('titleText')}
                >
                  <img
                    src="/src/images/titleTask.jpg"
                    alt="Прослушать текст"
                    width="18"
                    height="18"
                  />
                </button>
                <p id="titleText" class="HorizontalContainer_item_p">
                  {this.props.text}
                </p>
              </div>

              {this.props.type == 'dragAndDrop' &&
                this.state.stage == 'lesson' &&
                <LessonDragDrop />}

              {(this.state.stage == 'success' ||
                this.state.stage == 'failed') &&
                <ResultTask result={this.state.stage} />}
              {!(this.state.stage == 'success' ||
                this.state.stage == 'failed') &&
                <button class="buttonGreen" onClick={this.handleConfirm}>
                  Подтвердить
                </button>}
            </div>

            <ul class="style-Hint">
              <li class="timer">
                <p data-tooltip="Время">
                  <LessonTimer />
                </p>
              </li>
              <li class="mark">
                <p data-tooltip="Кол-во баллов">
                  <span>
                    {this.props.infoPoints}
                  </span>
                </p>
              </li>
              <li class="coins">
                <p data-tooltip="Кол-во монет">
                  <span>
                    {this.props.infoCoins}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </p>
        <p><LessonTip incNumberTip={this.incNumberTip} numberTip={this.state.numberTip} /></p>
      </p>
    );
  }
}

let mapStateToProps = state => {
  let questions = [];
  let lesson = getNameLesson (location.hash);
  if (lesson.length > 1) questions = state.dataLessons[lesson].questions;

  let currentTask = state.currentTask;
  let text = 'Задание не определено';
  let type = '';
  let countRightAnswers = state.countRightAnswers;
  let countAnswers = 0;
  let countTasks = 0;

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    let question = questions[currentTask];
    text = question.text;
    type = question.type;
    countTasks = questions.length;

    let answers = questions[currentTask].answers;

    if (Array.isArray (answers) && answers.length > 0)
      countAnswers = answers.length;
  }

  let pct = countTasks == 0
    ? 0
    : Math.floor (state.countCoins * 100 / countTasks);
  let infoPoints = state.countPoints.toString () + '(' + pct + '%)';
  let infoCoins = state.countCoins.toString () + '(' + pct + '%)';

  return {
    text: text,
    type: type,
    countRightAnswers: countRightAnswers,
    countAnswers: countAnswers,
    currentTask: currentTask,
    countTasks: countTasks,
    infoPoints: infoPoints,
    infoCoins: infoCoins,
  };
};

// Объект с генераторами действий
const mapDispatchToProps = {
  incrementCurrentTask: incrementCurrentTask,
  initCurrentTask: initCurrentTask,
  initCountRightAnswers: initCountRightAnswers,
  incrementCountPoints: incrementCountPoints,
  initCountPoints: initCountPoints,
  incrementCountCoins: incrementCountCoins,
  initCountCoins: initCountCoins,
};

export default connect (mapStateToProps, mapDispatchToProps) (LessonTemplate);

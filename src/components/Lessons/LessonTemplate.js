import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MenuTraining from '../routes/training/begin';
import {LessonTimer} from './LessonTimer';
import {incrementCounter, initCounter} from '../../actions';

class LessonTemplate extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    currentTask: PropTypes.number.isRequired,
    Count: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    initCounter: PropTypes.func.isRequired,
  };

  isKyr = str => {
    return /[а-яё]/i.test (str);
  };

  speekTitleTask () {
    let elem = document.getElementById ('titleText');
    if (!elem) return;
    let valueTitleText = elem.textContent;
    if (!valueTitleText) return;

    if (window.speechSynthesis && window.speechSynthesis != 'undefined') {
      let mytimer = setInterval (() => {
        let voices = speechSynthesis.getVoices ();

        if (voices.length !== 0) {
          let msg = new SpeechSynthesisUtterance ();

          if (this.isKyr (valueTitleText)) {
            let ruVoice = voices.filter (voice => {
              return voice.lang == 'ru-RU';
            });

            if (ruVoice.length !== 0) {
              msg.voice = ruVoice[0];
              msg.voiceURI = ruVoice[0].voiceURI;
            }
          }

          msg.text = valueTitleText;
          speechSynthesis.speak (msg);
        }

        clearInterval (mytimer);
      }, 1000);
    }
  }

  handleIncrement = () => {
    const {incrementCounter, initCounter} = this.props;

    if (this.props.currentTask < this.props.Count - 1) incrementCounter ();
    else initCounter ();
  };

  render () {
    return (
      <p>
        <MenuTraining />
        <div class="HorizontalContainer">
          <button
            class="HorizontalContainer_item_ButtonCircle"
            onClick={e => this.speekTitleTask (e)}
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

        <button class="buttonGreen" onClick={this.handleIncrement}>
          Подтвердить
        </button>

        <ul class="style-Hint">
          <li class="timer">
            <p data-tooltip="Время">
              <LessonTimer />
            </p>
          </li>
          <li class="mark">
            <p data-tooltip="Кол-во баллов">
              <span>
                15(25%)
              </span>
            </p>
          </li>
          <li class="coins">
            <p data-tooltip="Кол-во монет">
              <span>
                5(50%)
              </span>
            </p>
          </li>
        </ul>
      </p>
    );
  }
}

let mapStateToProps = state => {
  let lesson = '';
  let questions = [];

  if (typeof location.hash == 'string') {
    let Mlesson = location.hash.match (/(?<=lesson=)([\s\S]*?)(?=(\/|$))/gi);

    if (Array.isArray (Mlesson)) {
      lesson = Mlesson[0];
    }

    if (lesson.length > 1) questions = state.dataLessons[lesson].questions;
  }

  let currentTask = state.currentTask;
  let text = 'Задание не определено';
  let type = '';
  let answers = [];
  let Count = 0;

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    let question = questions[currentTask];
    text = question.text;
    type = question.type;
    answers = question.answers;
    Count = questions.length;
  }

  return {
    text: text,
    type: type,
    answers: answers,
    currentTask: currentTask,
    Count: Count,
  };
};

// Объект с генераторами действий
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  initCounter: initCounter,
};

export default connect (mapStateToProps, mapDispatchToProps) (LessonTemplate);

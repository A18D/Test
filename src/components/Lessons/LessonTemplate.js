import React, {PureComponent} from 'react';
import MenuTraining from '../routes/training/begin';
import {LessonTimer} from './LessonTimer';

export class LessonTemplate extends PureComponent {
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
            Текст задания не определен. Text ne opredelen
          </p>
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

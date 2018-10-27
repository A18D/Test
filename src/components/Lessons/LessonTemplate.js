import React, {PureComponent} from 'react';
import MenuTraining from '../routes/training/begin';
import {LessonTimer} from './LessonTimer';

export class LessonTemplate extends PureComponent {
  speekTitleTask () {
    alert ("I don't speak");
  }

  render () {
    return (
      <p>
        <MenuTraining />
        <div class="HorizontalContainer">
          <button class="HorizontalContainer_item_ButtonCircle" onClick={e => this.speekTitleTask (e)}>
            <img
              src="/src/images/titleTask.jpg"
              alt="Прослушать текст"
              width="18"
              height="18"
            />
          </button>
          <p class="HorizontalContainer_item_p">Текст задания отсутствует</p>
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

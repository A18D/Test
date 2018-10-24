import React, {PureComponent} from 'react';
import MenuTraining from '../routes/training/begin';
import {LessonTimer} from './LessonTimer';

export const lessonTemplate = () => (
  <p>
    <MenuTraining />

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


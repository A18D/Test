import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom';
import {PageTemplate} from './pageTemplate';
import {AboutMenu} from '../menus';
import {MenuTraining} from './training/begin';
import {Rewards} from './training/rewards';
import {lessonTemplate} from '../Lessons/LessonTemplate';  
import store from '../../store';

const stateStore = store.getState ();
const lessons = stateStore.dataLessons.titleLessons;

export const Training = ({match}) => (
  <PageTemplate>
    <section>
      <Route component={AboutMenu} />
      <Route exact path="/Training/begin" component={MenuTraining} />
      <Route path="/Training/rewards" component={Rewards} />
      {lessons.map (lesson => {
        return (
          <Route
            path={`/Training/begin/${lesson.id}`}
            component={lessonTemplate}
          />
        );
      })}

    </section>
    <p>Раздел обучение</p>
    <button></button>
  </PageTemplate>
);

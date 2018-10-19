import stateData from '../data/initialState';
import C from '../constants';
import store from './../store';

export default action => {
  switch (action) {
    case C.GET_LESSONS: {
      const stateStore = store.getState ();
      const lessons = stateStore.dataLessons.titleLessons;

      return lessons;
    }

    default:
      return stateData;
  }
};

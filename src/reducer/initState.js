import {LOAD_ALL_LESSONS, SUCCESS, LOAD_TTITLE_LESSONS} from '../constants';
import store from './../store';

export default (val, action) => {
  const {type} = action;

  switch (type) {
    case LOAD_ALL_LESSONS + SUCCESS: {
      return action.stateData;
    }
    case LOAD_TTITLE_LESSONS: {
      const stateStore = store.getState ();
      const lessons = stateStore.dataLessons.titleLessons;
      return lessons;
    }
    default: {
      if (!val) {
        return {};
      } else {
        return val;
      }
    }
  }
};

import {ENABLE_TIP, DISABLE_TIP} from '../constants';

export const changeShowTipReducer = (val, action) => {
  const {type} = action;

  switch (type) {
    case ENABLE_TIP: {
      return true;
    }
    case DISABLE_TIP: {
      return false;
    }
    default:
      if (!val) return false;
  }

  return val;
};

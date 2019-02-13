import {SUCCESS} from '../constants';
import initData from '../data/initialState';

export default store => next => action => {
  const {callAPI, type, ...rest} = action;

  if (!callAPI) {
    return next (action);
  }

  setTimeout (() => {
    fetch (callAPI)
      .then (res => {
        if (res.ok) {
          return res.json ();
        }
      })
      .then (function (data) {
        if (data) {
          let stateData = data;
          next ({...rest, type: type + SUCCESS, stateData});
        } else {
          console.log ('The init data is not definition');
        }
      })
      .catch (error => {
        console.log (`ERROR in XHR: ${error}`);
        let stateData = initData;
        next ({...rest, type: type + SUCCESS, stateData});
      });
  }, 10);
};

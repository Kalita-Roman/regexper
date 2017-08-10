import * as store from '../services/storage';
import { textsSet } from './texts';

import debounce from 'debounce';

const TYPING_INTERVAL = 300;
const calulate = debounce(matchPattern, TYPING_INTERVAL);

const setRegExp = (payload) => ({
  type: 'REGEXP.SET',
  payload,
});

const setErrorRegExp = (payload) => ({
  type: 'REGEXP.ERROR',
  payload,
});

export const regExpLoad = () => {
  const pattern = store.get('regexp');
  return setRegExp({ pattern });
};

export const regExpSet = (pattern) => (dispatch, getStore) => {
  store.set('regexp', pattern);
  dispatch(setRegExp({ pattern }));
  calulate(dispatch, getStore);
};

export const regMatchPattern = () => (dispatch, getStore) => {
  calulate.clear();
  matchPattern(dispatch, getStore);
};

function matchPattern(dispatch, getStore) {
  const { texts, regExp: { pattern } } = getStore();
  const flags = '';
  try {
    const reg = RegExp(pattern, flags);
    const newTexts = texts.map(item => ({ ...item, match: reg.test(item.value) }));
    dispatch(textsSet(newTexts));
    dispatch(setErrorRegExp(false));
  }
  catch (error) {
    dispatch(setErrorRegExp(true));
  }
};



import * as store from '../services/storage';
import { regMatchPattern } from './regExp';

function getId(items) {
  let id = 0;
  do {
    id = Math.random();
  } while (items.find(x => x.id === id));
  return id;
};

function getTextsFromStore() {
  return store.get('texts') || [];
}

export function textsSet(payload) {
  store.set('texts', payload);
  return {
    type: 'TEXTS.SET',
    payload,
  };
}

export const textsCreateNew = (text) => (dispatch, getState) => {
  const texts = getTextsFromStore();
  const id = getId(texts);
  const item = { id };
  texts.splice(0,0,item);
  dispatch(textsSet([...texts]));
  dispatch(regMatchPattern());
};

export const textsRemove = (id) => (dispatch) => {
  const texts = getTextsFromStore()
    .filter(x => x.id !== id);
  dispatch(textsSet(texts));
};

export const textsSetData = (id, value) => (dispatch) => {
  const texts = getTextsFromStore();
  const index = texts.findIndex(x => x.id === id);
  texts[index].value = value;
  dispatch(textsSet(texts));
  dispatch(regMatchPattern());
};

export const textsClear = () => (dispatch) => {
  dispatch(textsSet([]));
};

export const textsLoad = () => (dispatch) => {
  const texts = getTextsFromStore();;
  dispatch(textsSet(texts));
};
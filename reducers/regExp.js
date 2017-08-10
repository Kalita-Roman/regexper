const initState = {
  pattern: ''
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'REGEXP.SET': {
      return { ...state, ...payload, error: false };
    }
    case 'REGEXP.ERROR': {
      return { ...state, error: payload };
    }
    default:
      return state;
  }
};
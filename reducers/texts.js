export default (state = [], { type, payload }) => {
  switch (type) {
    case 'TEXTS.SET': {
      return payload;
    }
    default:
      return state;
  }
};
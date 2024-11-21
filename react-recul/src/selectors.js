import get from 'lodash/get';

const getState = state => state.APP;

export const getProp = (state, propPath) => {
  return get(getState(state), propPath);
};

import { combineReducers } from 'redux';

import common from './common';

const rootReducer = combineReducers({
  common,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

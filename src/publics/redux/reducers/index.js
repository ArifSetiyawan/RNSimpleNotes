import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

import RootNavigator from '../../navigators/RootNavigator';
import notesReducers from '../reducers/notesReducers';
const reducerRouter = createNavigationReducer(RootNavigator);

const reducers = combineReducers({
  router: reducerRouter,
  notes: notesReducers
});

export default reducers;
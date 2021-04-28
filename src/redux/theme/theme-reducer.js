import { createReducer } from '@reduxjs/toolkit';
import * as actions from './theme-actions';

const themeReducer = createReducer(true, {
  [actions.changeTheme]: state => !state,
});

export default themeReducer;

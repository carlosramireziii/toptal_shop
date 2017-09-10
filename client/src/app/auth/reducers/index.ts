import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromAuth from './auth';
import * as fromLogin from './login';

export interface AuthState {
  status: fromAuth.State;
  login: fromLogin.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
  login: fromLogin.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

export const selectLoginState = createSelector(
  selectAuthState,
  (state: AuthState) => state.login
);
export const getLoginError = createSelector(
  selectLoginState,
  fromLogin.getError
);
export const getLoginPending = createSelector(
  selectLoginState,
  fromLogin.getPending
);
